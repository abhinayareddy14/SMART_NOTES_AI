"use client"

import { useState } from "react"
import { analyzeNoteContentMock } from "../actions/analyze-note"

interface AnalysisResult {
  summary: string
  suggestedTags: string[]
  confidence: number
}

export function useNoteAnalysis() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  const analyzeContent = async (content: string) => {
    if (!content.trim()) {
      setError("Content cannot be empty")
      return null
    }

    setIsAnalyzing(true)
    setError(null)
    setAnalysisResult(null)

    try {
      const result = await analyzeNoteContentMock(content)

      if (result.success) {
        setAnalysisResult(result.data)
        return result.data
      } else {
        setError(result.error)
        return null
      }
    } catch (err) {
      setError("An unexpected error occurred")
      return null
    } finally {
      setIsAnalyzing(false)
    }
  }

  const clearAnalysis = () => {
    setAnalysisResult(null)
    setError(null)
  }

  return {
    analyzeContent,
    clearAnalysis,
    isAnalyzing,
    analysisResult,
    error,
  }
}
