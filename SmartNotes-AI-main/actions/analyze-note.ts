"use server"

import { generateObject } from "ai"
import { openai } from "@ai-sdk/openai"
import { z } from "zod"

const AnalysisSchema = z.object({
  summary: z.string().describe("A concise 1-2 sentence summary of the note content"),
  suggestedTags: z.array(z.string()).describe("3-5 relevant tags for categorizing this note"),
  confidence: z.number().min(0).max(1).describe("Confidence score for the analysis"),
})

export async function analyzeNoteContent(content: string) {
  try {
    if (!content.trim()) {
      return {
        success: false,
        error: "Note content cannot be empty",
      }
    }

    const result = await generateObject({
      model: openai("gpt-4o-mini"),
      schema: AnalysisSchema,
      prompt: `Analyze the following note content and provide:
      1. A concise summary (1-2 sentences)
      2. 3-5 relevant tags for categorization
      3. A confidence score for your analysis
      
      Note content: "${content}"
      
      Make tags lowercase, single words or short phrases. Focus on topics, categories, and key themes.`,
    })

    return {
      success: true,
      data: result.object,
    }
  } catch (error) {
    console.error("Error analyzing note:", error)
    return {
      success: false,
      error: "Failed to analyze note content. Please try again.",
    }
  }
}

// Alternative function for when AI SDK is not available - uses a mock API
export async function analyzeNoteContentMock(content: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  try {
    if (!content.trim()) {
      return {
        success: false,
        error: "Note content cannot be empty",
      }
    }

    // Mock analysis based on content keywords
    const words = content.toLowerCase().split(/\s+/)
    const suggestedTags: string[] = []

    // Simple keyword-based tag suggestion
    if (words.some((w) => ["meeting", "discuss", "agenda"].includes(w))) {
      suggestedTags.push("meetings")
    }
    if (words.some((w) => ["project", "development", "build"].includes(w))) {
      suggestedTags.push("projects")
    }
    if (words.some((w) => ["learn", "study", "course"].includes(w))) {
      suggestedTags.push("learning")
    }
    if (words.some((w) => ["idea", "brainstorm", "concept"].includes(w))) {
      suggestedTags.push("ideas")
    }
    if (words.some((w) => ["task", "todo", "complete"].includes(w))) {
      suggestedTags.push("tasks")
    }

    // Add generic tags if no specific ones found
    if (suggestedTags.length === 0) {
      suggestedTags.push("general", "notes")
    }

    // Generate a simple summary (first sentence or truncated content)
    const sentences = content.split(/[.!?]+/)
    const summary = sentences[0]?.trim()
      ? sentences[0].trim() + (sentences.length > 1 ? "..." : "")
      : content.substring(0, 100) + (content.length > 100 ? "..." : "")

    return {
      success: true,
      data: {
        summary,
        suggestedTags: suggestedTags.slice(0, 5),
        confidence: 0.75,
      },
    }
  } catch (error) {
    return {
      success: false,
      error: "Failed to analyze note content. Please try again.",
    }
  }
}
