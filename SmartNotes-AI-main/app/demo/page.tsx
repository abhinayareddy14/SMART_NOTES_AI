"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import NotesFromApi from "../../components/notes-from-api"
import type { ApiNote } from "../../services/api"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Brain } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DemoPage() {
  const router = useRouter()
  const [selectedNote, setSelectedNote] = useState<ApiNote | null>(null)

  const handleEditNote = (note: ApiNote) => {
    setSelectedNote(note)
    console.log("Edit note:", note)
  }

  const handleDeleteNote = (noteId: string) => {
    console.log("Note deleted:", noteId)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl">SmartNotes AI</span>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" onClick={() => router.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button asChild>
              <a href="/app">Launch Full App</a>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">SmartNotes AI Demo</h1>
          <p className="text-gray-600 text-lg">
            Explore our AI-powered note-taking features with sample data. See how intelligent summaries and smart
            tagging can transform your productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Sample Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">4</div>
              <CardDescription>Demo notes with AI features</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">AI Summaries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">2</div>
              <CardDescription>Notes with AI-generated summaries</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Smart Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">8</div>
              <CardDescription>Intelligent tag suggestions</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">5</div>
              <CardDescription>Different content types</CardDescription>
            </CardContent>
          </Card>
        </div>

        <NotesFromApi onEditNote={handleEditNote} onDeleteNote={handleDeleteNote} />

        {selectedNote && (
          <div className="mt-8 p-4 border rounded-lg bg-white">
            <h2 className="text-lg font-semibold mb-2">Note Details</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700">Title</h3>
                <p className="text-gray-900">{selectedNote.title}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Content</h3>
                <p className="text-gray-900">{selectedNote.content}</p>
              </div>
              {selectedNote.summary && (
                <div>
                  <h3 className="font-medium text-gray-700">AI Summary</h3>
                  <p className="text-blue-700 bg-blue-50 p-2 rounded">{selectedNote.summary}</p>
                </div>
              )}
              <div>
                <h3 className="font-medium text-gray-700">Tags</h3>
                <p className="text-gray-900">{selectedNote.tags.join(", ")}</p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Ready to try the full application?</CardTitle>
              <CardDescription>
                Experience all features including note creation, editing, AI analysis, and advanced search capabilities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" asChild>
                <a href="/app">Launch SmartNotes AI</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
