import axios from "axios"

// Create an axios instance with default config
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json",
  },
})

export interface ApiNote {
  id: string
  title: string
  content: string
  tags: string[]
  summary?: string
  createdAt: string
  updatedAt: string
}

export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

// Notes API service
export const notesApi = {
  // Get all notes
  getAllNotes: async (): Promise<ApiResponse<ApiNote[]>> => {
    try {
      const response = await api.get<ApiResponse<ApiNote[]>>("/notes")
      return response.data
    } catch (error) {
      console.error("Error fetching notes:", error)
      throw error
    }
  },

  // Get a single note by ID
  getNote: async (id: string): Promise<ApiResponse<ApiNote>> => {
    try {
      const response = await api.get<ApiResponse<ApiNote>>(`/notes/${id}`)
      return response.data
    } catch (error) {
      console.error(`Error fetching note with ID ${id}:`, error)
      throw error
    }
  },

  // Create a new note
  createNote: async (note: Omit<ApiNote, "id" | "createdAt" | "updatedAt">): Promise<ApiResponse<ApiNote>> => {
    try {
      const response = await api.post<ApiResponse<ApiNote>>("/notes", note)
      return response.data
    } catch (error) {
      console.error("Error creating note:", error)
      throw error
    }
  },

  // Update an existing note
  updateNote: async (id: string, note: Partial<ApiNote>): Promise<ApiResponse<ApiNote>> => {
    try {
      const response = await api.put<ApiResponse<ApiNote>>(`/notes/${id}`, note)
      return response.data
    } catch (error) {
      console.error(`Error updating note with ID ${id}:`, error)
      throw error
    }
  },

  // Delete a note
  deleteNote: async (id: string): Promise<ApiResponse<{ id: string }>> => {
    try {
      const response = await api.delete<ApiResponse<{ id: string }>>(`/notes/${id}`)
      return response.data
    } catch (error) {
      console.error(`Error deleting note with ID ${id}:`, error)
      throw error
    }
  },
}
