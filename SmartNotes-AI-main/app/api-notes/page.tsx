"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import NotesFromApi from "../../components/notes-from-api"
import type { ApiNote } from "../../services/api"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Loader2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ApiNotesPage() {
  const router = useRouter()
  const [selectedNote, setSelectedNote] = useState<ApiNote | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleEditNote = (note: ApiNote) => {
    setSelectedNote(note)
    // In a real app, you would open a modal or navigate to an edit page
    console.log("Edit note:", note)
  }

  const handleDeleteNote = (noteId: string) => {
    // Additional logic if needed after deletion
    console.log("Note deleted:", noteId)
  }

  if (isLoading) {
    return (
      <div className="container mx-auto p-4 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Loading notes from API...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
        <Button className="mt-4" onClick={() => router.back()}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go Back
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={() => router.back()} className="mr-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <h1 className="text-2xl font-bold">Notes from API</h1>
      </div>

      <NotesFromApi onEditNote={handleEditNote} onDeleteNote={handleDeleteNote} />

      {selectedNote && (
        <div className="mt-8 p-4 border rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Selected Note Details</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-auto">{JSON.stringify(selectedNote, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}
