"use client"

import { useEffect, useState } from "react"
import { Edit3, Trash2, RefreshCw, AlertCircle } from "lucide-react"
import type { ApiNote } from "../services/api"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Skeleton } from "@/components/ui/skeleton"

interface NotesFromApiProps {
  onEditNote?: (note: ApiNote) => void
  onDeleteNote?: (noteId: string) => void
  className?: string
}

export default function NotesFromApi({ onEditNote, onDeleteNote, className = "" }: NotesFromApiProps) {
  const [notes, setNotes] = useState<ApiNote[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [refreshKey, setRefreshKey] = useState(0)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setLoading(true)
        setError(null)

        // Use our new API endpoint
        const response = await fetch("/api/notes", {
          credentials: "include",
        })

        const data = await response.json()

        if (data.success) {
          setNotes(data.data)
        } else {
          setError(data.message || "Failed to fetch notes")
        }
      } catch (err) {
        setError("An error occurred while fetching notes. Please try again.")
        console.error("Error fetching notes:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchNotes()
  }, [refreshKey])

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1)
  }

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: "DELETE",
        credentials: "include",
      })

      const data = await response.json()

      if (data.success) {
        setNotes((prev) => prev.filter((note) => note.id !== id))
        if (onDeleteNote) {
          onDeleteNote(id)
        }
      } else {
        setError("Failed to delete note. Please try again.")
      }
    } catch (err) {
      console.error("Error deleting note:", err)
      setError("Failed to delete note. Please try again.")
    }
  }

  if (loading) {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="overflow-hidden">
            <CardHeader className="pb-2">
              <Skeleton className="h-6 w-3/4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6 mb-2" />
              <Skeleton className="h-4 w-4/6 mb-4" />
              <div className="flex gap-1 mb-2">
                <Skeleton className="h-5 w-16 rounded-full" />
                <Skeleton className="h-5 w-12 rounded-full" />
              </div>
              <Skeleton className="h-3 w-24 mt-2" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <Alert variant="destructive" className="mb-4">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
        <Button variant="outline" size="sm" onClick={handleRefresh} className="mt-2">
          <RefreshCw className="h-4 w-4 mr-2" />
          Try Again
        </Button>
      </Alert>
    )
  }

  if (notes.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <p className="text-gray-500 text-lg mb-2">No notes found</p>
        <p className="text-gray-400 text-sm mb-4">There are no notes available from the API</p>
        <Button variant="outline" size="sm" onClick={handleRefresh}>
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>
    )
  }

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Notes from API</h2>
        <Button variant="outline" size="sm" onClick={handleRefresh}>
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {notes.map((note) => (
          <Card key={note.id} className="hover:shadow-md transition-shadow group">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg font-medium line-clamp-2">{note.title}</CardTitle>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {onEditNote && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        onEditNote(note)
                      }}
                      className="h-8 w-8 p-0"
                    >
                      <Edit3 className="w-4 h-4" />
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDelete(note.id)
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
                  <p className="text-sm text-blue-800 font-medium">Summary</p>
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
              <p className="text-xs text-gray-400">{new Date(note.updatedAt).toLocaleDateString()}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
