"use client"

import { useState, useMemo } from "react"
import { Search, Plus, Edit3, Trash2, Tag, X, Save, Sparkles, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { useNoteAnalysis } from "./hooks/use-note-analysis"

interface Note {
  id: string
  title: string
  content: string
  tags: string[]
  summary?: string
  createdAt: Date
  updatedAt: Date
}

const initialNotes: Note[] = [
  {
    id: "1",
    title: "Project Ideas",
    content:
      "Build a smart notes app with React and TypeScript. Include features like tagging, search, and responsive design. The app should have AI-powered analysis for automatic summarization and tag suggestions.",
    tags: ["development", "react", "typescript"],
    summary: "Building a smart notes app with React, TypeScript, and AI-powered features.",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    title: "Meeting Notes",
    content:
      "Discussed the new product roadmap. Key points: user feedback integration, mobile app development, and AI features. Next steps include prototyping and user testing.",
    tags: ["meetings", "product", "roadmap"],
    summary: "Product roadmap discussion covering user feedback, mobile development, and AI features.",
    createdAt: new Date("2024-01-14"),
    updatedAt: new Date("2024-01-14"),
  },
  {
    id: "3",
    title: "Learning Goals",
    content:
      "Focus on improving React skills, learn more about state management, and explore new CSS frameworks. Consider taking an advanced React course.",
    tags: ["learning", "react", "css"],
    createdAt: new Date("2024-01-13"),
    updatedAt: new Date("2024-01-13"),
  },
  {
    id: "4",
    title: "Recipe Ideas",
    content:
      "Try making homemade pasta this weekend. Need to buy fresh basil, tomatoes, and parmesan cheese. Look up authentic Italian recipes.",
    tags: ["cooking", "recipes", "weekend"],
    createdAt: new Date("2024-01-12"),
    updatedAt: new Date("2024-01-12"),
  },
]

export default function SmartNotesApp() {
  const [notes, setNotes] = useState<Note[]>(initialNotes)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingNote, setEditingNote] = useState<Note | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: "",
  })
  const [copiedSummary, setCopiedSummary] = useState(false)

  const { analyzeContent, clearAnalysis, isAnalyzing, analysisResult, error } = useNoteAnalysis()

  // Get all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    notes.forEach((note) => {
      note.tags.forEach((tag) => tagSet.add(tag))
    })
    return Array.from(tagSet).sort()
  }, [notes])

  // Filter notes based on search and selected tags
  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      const matchesSearch =
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (note.summary && note.summary.toLowerCase().includes(searchQuery.toLowerCase()))
      const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => note.tags.includes(tag))
      return matchesSearch && matchesTags
    })
  }, [notes, searchQuery, selectedTags])

  const handleCreateNote = () => {
    setEditingNote(null)
    setFormData({ title: "", content: "", tags: "" })
    clearAnalysis()
    setIsModalOpen(true)
  }

  const handleEditNote = (note: Note) => {
    setEditingNote(note)
    setFormData({
      title: note.title,
      content: note.content,
      tags: note.tags.join(", "),
    })
    clearAnalysis()
    setIsModalOpen(true)
  }

  const handleAnalyzeContent = async () => {
    if (!formData.content.trim()) {
      return
    }
    await analyzeContent(formData.content)
  }

  const handleApplySuggestedTags = () => {
    if (analysisResult?.suggestedTags) {
      const currentTags = formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0)

      const newTags = analysisResult.suggestedTags.filter((tag) => !currentTags.includes(tag))

      const allTags = [...currentTags, ...newTags]
      setFormData((prev) => ({ ...prev, tags: allTags.join(", ") }))
    }
  }

  const handleCopySummary = async () => {
    if (analysisResult?.summary) {
      await navigator.clipboard.writeText(analysisResult.summary)
      setCopiedSummary(true)
      setTimeout(() => setCopiedSummary(false), 2000)
    }
  }

  const handleSaveNote = () => {
    const tags = formData.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0)

    if (editingNote) {
      // Update existing note
      setNotes((prev) =>
        prev.map((note) =>
          note.id === editingNote.id
            ? {
                ...note,
                title: formData.title,
                content: formData.content,
                tags,
                summary: analysisResult?.summary || note.summary,
                updatedAt: new Date(),
              }
            : note,
        ),
      )
    } else {
      // Create new note
      const newNote: Note = {
        id: Date.now().toString(),
        title: formData.title,
        content: formData.content,
        tags,
        summary: analysisResult?.summary,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      setNotes((prev) => [newNote, ...prev])
    }

    setIsModalOpen(false)
    setFormData({ title: "", content: "", tags: "" })
    setEditingNote(null)
    clearAnalysis()
  }

  const handleDeleteNote = (noteId: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== noteId))
  }

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const clearTagFilters = () => {
    setSelectedTags([])
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <Sidebar className="border-r border-gray-200">
          <SidebarHeader className="p-4">
            <h2 className="text-lg font-semibold text-gray-900">SmartNotes AI</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="flex items-center justify-between">
                <span>Tags</span>
                {selectedTags.length > 0 && (
                  <Button variant="ghost" size="sm" onClick={clearTagFilters} className="h-6 px-2 text-xs">
                    Clear
                  </Button>
                )}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {allTags.map((tag) => (
                    <SidebarMenuItem key={tag}>
                      <SidebarMenuButton
                        onClick={() => toggleTag(tag)}
                        className={`w-full justify-start ${
                          selectedTags.includes(tag) ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
                        }`}
                      >
                        <Tag className="w-4 h-4 mr-2" />
                        <span className="truncate">{tag}</span>
                        <Badge variant="secondary" className="ml-auto">
                          {notes.filter((note) => note.tags.includes(tag)).length}
                        </Badge>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        {/* Main Content */}
        <SidebarInset className="flex-1 flex flex-col">
          {/* Header with Search */}
          <header className="bg-white border-b border-gray-200 p-4">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="md:hidden" />
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search notes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Button onClick={handleCreateNote} className="hidden md:flex">
                <Plus className="w-4 h-4 mr-2" />
                New Note
              </Button>
            </div>
          </header>

          {/* Notes Grid */}
          <main className="flex-1 p-4 overflow-auto">
            {selectedTags.length > 0 && (
              <div className="mb-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm text-gray-600">Filtered by:</span>
                  {selectedTags.map((tag) => (
                    <Badge key={tag} variant="default" className="flex items-center gap-1">
                      {tag}
                      <X className="w-3 h-3 cursor-pointer" onClick={() => toggleTag(tag)} />
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredNotes.map((note) => (
                <Card key={note.id} className="hover:shadow-md transition-shadow cursor-pointer group">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg font-medium line-clamp-2">{note.title}</CardTitle>
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleEditNote(note)
                          }}
                          className="h-8 w-8 p-0"
                        >
                          <Edit3 className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleDeleteNote(note.id)
                          }}
                          className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {note.summary && (
                      <div className="mb-3 p-2 bg-blue-50 rounded-md border-l-2 border-blue-200">
                        <p className="text-sm text-blue-800 font-medium">AI Summary</p>
                        <p className="text-sm text-blue-700">{note.summary}</p>
                      </div>
                    )}
                    <p className="text-gray-600 text-sm line-clamp-3 mb-3">{note.content}</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {note.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400">{note.updatedAt.toLocaleDateString()}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredNotes.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-2">No notes found</p>
                <p className="text-gray-400 text-sm">
                  {searchQuery || selectedTags.length > 0
                    ? "Try adjusting your search or filters"
                    : "Create your first note to get started"}
                </p>
              </div>
            )}
          </main>

          {/* Floating Action Button (Mobile) */}
          <Button
            onClick={handleCreateNote}
            className="fixed bottom-6 right-6 md:hidden w-14 h-14 rounded-full shadow-lg"
            size="lg"
          >
            <Plus className="w-6 h-6" />
          </Button>
        </SidebarInset>

        {/* Note Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                {editingNote ? "Edit Note" : "Create New Note"}
                <Sparkles className="w-5 h-5 text-blue-500" />
              </DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column - Note Editor */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                    placeholder="Enter note title..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                  <Textarea
                    value={formData.content}
                    onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
                    placeholder="Write your note content..."
                    rows={8}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
                  <Input
                    value={formData.tags}
                    onChange={(e) => setFormData((prev) => ({ ...prev, tags: e.target.value }))}
                    placeholder="Enter tags separated by commas..."
                  />
                  <p className="text-xs text-gray-500 mt-1">Separate multiple tags with commas</p>
                </div>
              </div>

              {/* Right Column - AI Analysis */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">AI Analysis</h3>
                  <Button
                    onClick={handleAnalyzeContent}
                    disabled={!formData.content.trim() || isAnalyzing}
                    variant="outline"
                    size="sm"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    {isAnalyzing ? "Analyzing..." : "Analyze"}
                  </Button>
                </div>

                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {analysisResult && (
                  <div className="space-y-4">
                    {/* Summary */}
                    <div className="p-4 bg-blue-50 rounded-lg border">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-blue-900">Summary</h4>
                        <Button onClick={handleCopySummary} variant="ghost" size="sm" className="h-6 px-2">
                          {copiedSummary ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        </Button>
                      </div>
                      <p className="text-sm text-blue-800">{analysisResult.summary}</p>
                    </div>

                    {/* Suggested Tags */}
                    <div className="p-4 bg-green-50 rounded-lg border">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-green-900">Suggested Tags</h4>
                        <Button
                          onClick={handleApplySuggestedTags}
                          variant="ghost"
                          size="sm"
                          className="h-6 px-2 text-green-700 hover:text-green-800"
                        >
                          Apply All
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {analysisResult.suggestedTags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-green-700 border-green-300">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Confidence Score */}
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Confidence</span>
                        <span className="text-sm text-gray-600">{Math.round(analysisResult.confidence * 100)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${analysisResult.confidence * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {!analysisResult && !error && !isAnalyzing && (
                  <div className="text-center py-8 text-gray-500">
                    <Sparkles className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <p className="text-sm">Add content and click "Analyze" to get AI-powered insights</p>
                  </div>
                )}
              </div>
            </div>

            <Separator className="my-4" />

            <div className="flex gap-2">
              <Button
                onClick={handleSaveNote}
                disabled={!formData.title.trim() || !formData.content.trim()}
                className="flex-1"
              >
                <Save className="w-4 h-4 mr-2" />
                {editingNote ? "Update Note" : "Create Note"}
              </Button>
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </SidebarProvider>
  )
}
