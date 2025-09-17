import { NextResponse } from "next/server"

// Mock notes data
const notes = [
  {
    id: "api-1",
    title: "API Integration Guide",
    content:
      "This note explains how to integrate with various APIs including REST and GraphQL endpoints. Key points include authentication methods, error handling, and response parsing.",
    tags: ["api", "development", "tutorial"],
    summary: "A comprehensive guide to API integration with authentication and error handling tips.",
    createdAt: "2024-05-15T10:30:00Z",
    updatedAt: "2024-05-15T14:45:00Z",
  },
  {
    id: "api-2",
    title: "Database Schema Design",
    content:
      "Best practices for designing database schemas. Topics covered: normalization, indexing strategies, relationship modeling, and performance considerations for different database types.",
    tags: ["database", "architecture", "performance"],
    summary: "Database schema design principles focusing on normalization and performance.",
    createdAt: "2024-05-10T08:20:00Z",
    updatedAt: "2024-05-12T11:15:00Z",
  },
  {
    id: "api-3",
    title: "Frontend Performance Optimization",
    content:
      "Techniques to improve frontend performance including code splitting, lazy loading, image optimization, and effective caching strategies. Includes benchmark results from real-world applications.",
    tags: ["frontend", "performance", "optimization"],
    createdAt: "2024-05-08T15:10:00Z",
    updatedAt: "2024-05-09T09:30:00Z",
  },
  {
    id: "api-4",
    title: "Authentication Strategies",
    content:
      "Comparison of different authentication methods: JWT, OAuth, session-based, and passwordless authentication. Includes security considerations and implementation examples.",
    tags: ["security", "authentication", "development"],
    summary: "Overview of authentication methods with security best practices.",
    createdAt: "2024-05-05T12:00:00Z",
    updatedAt: "2024-05-06T16:20:00Z",
  },
]

export async function GET() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  return NextResponse.json({
    success: true,
    data: notes,
    message: "Notes retrieved successfully",
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.title || !body.content) {
      return NextResponse.json(
        {
          success: false,
          message: "Title and content are required",
        },
        { status: 400 },
      )
    }

    // Create a new note (in a real app, this would be saved to a database)
    const newNote = {
      id: `api-${Date.now()}`,
      title: body.title,
      content: body.content,
      tags: body.tags || [],
      summary: body.summary,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    // In a real app, we would add the note to the database here

    return NextResponse.json(
      {
        success: true,
        data: newNote,
        message: "Note created successfully",
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create note",
      },
      { status: 500 },
    )
  }
}
