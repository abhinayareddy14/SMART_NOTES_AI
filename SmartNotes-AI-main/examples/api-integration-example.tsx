"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SmartNotesApp from "../smart-notes-app"
import NotesFromApi from "../components/notes-from-api"
import type { ApiNote } from "../services/api"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function ApiIntegrationExample() {
  const [activeTab, setActiveTab] = useState("local")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedApiNote, setSelectedApiNote] = useState<ApiNote | null>(null)

  const handleEditApiNote = (note: ApiNote) => {
    setSelectedApiNote(note)
    setIsModalOpen(true)
  }

  return (
    <div className="h-screen flex flex-col">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        <div className="border-b">
          <div className="container mx-auto px-4">
            <TabsList className="h-14">
              <TabsTrigger value="local" className="text-base">
                Local Notes
              </TabsTrigger>
              <TabsTrigger value="api" className="text-base">
                API Notes
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent value="local" className="flex-1 data-[state=active]:flex data-[state=active]:flex-col">
          <SmartNotesApp />
        </TabsContent>

        <TabsContent value="api" className="flex-1 data-[state=active]:flex data-[state=active]:flex-col">
          <div className="container mx-auto p-4 flex-1 overflow-auto">
            <NotesFromApi onEditNote={handleEditApiNote} className="mb-8" />
          </div>
        </TabsContent>
      </Tabs>

      {/* Modal for API note details */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>API Note Details</DialogTitle>
          </DialogHeader>

          {selectedApiNote && (
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-1">Title</h3>
                <p className="p-2 bg-gray-50 rounded">{selectedApiNote.title}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-1">Content</h3>
                <p className="p-2 bg-gray-50 rounded whitespace-pre-wrap">{selectedApiNote.content}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-1">Tags</h3>
                <p className="p-2 bg-gray-50 rounded">{selectedApiNote.tags.join(", ")}</p>
              </div>

              <div className="flex justify-end">
                <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
