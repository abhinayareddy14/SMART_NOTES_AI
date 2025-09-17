import Link from "next/link"
import { ArrowLeft, Brain, Sparkles, FileText, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AiSummariesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Link href="/features">
          <Button variant="ghost" className="pl-0">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Features
          </Button>
        </Link>
      </div>

      <div className="flex items-center mb-8">
        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
          <Brain className="h-6 w-6 text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold">AI-Powered Summaries</h1>
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <p className="lead text-xl text-gray-600 mb-8">
          SmartNotes AI uses advanced natural language processing to automatically generate concise summaries of your
          notes, helping you quickly grasp key points without reading through lengthy content.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How It Works</h2>
        <p>
          Our AI summary feature analyzes your note content using state-of-the-art language models to identify the most
          important information. The AI considers factors like:
        </p>
        <ul className="space-y-2 my-4">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>Key topics and main ideas in your content</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>Important facts, figures, and data points</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>Action items and decisions made</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>Context and relationships between ideas</span>
          </li>
        </ul>

        <p>
          The result is a concise 1-2 sentence summary that captures the essence of your note, making it easier to
          review and find information later.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-2 flex items-center">
                <Sparkles className="h-5 w-5 text-blue-500 mr-2" />
                Save Time
              </h3>
              <p className="text-gray-600">
                Quickly understand the content of your notes without reading through everything, perfect for review and
                refreshing your memory.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-2 flex items-center">
                <FileText className="h-5 w-5 text-blue-500 mr-2" />
                Better Organization
              </h3>
              <p className="text-gray-600">
                Use summaries to quickly identify notes and organize them more effectively based on their content.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-2 flex items-center">
                <Brain className="h-5 w-5 text-blue-500 mr-2" />
                Enhanced Search
              </h3>
              <p className="text-gray-600">
                Our search functionality includes summaries, making it easier to find relevant notes even when you don't
                remember the exact wording.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-2 flex items-center">
                <Check className="h-5 w-5 text-blue-500 mr-2" />
                Improved Recall
              </h3>
              <p className="text-gray-600">
                Summaries help reinforce key information, improving your ability to remember and recall important
                details.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Technical Details</h2>
        <p>
          Our AI summary feature is powered by advanced language models specifically fine-tuned for summarization tasks.
          The models are trained on diverse content types to ensure high-quality summaries across various subjects and
          writing styles.
        </p>
        <p className="mt-4">
          Summaries are generated in real-time as you create or edit notes, with the option to regenerate or customize
          the summary length based on your preferences.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-medium mb-2 text-blue-800">Privacy First</h3>
          <p className="text-blue-700">
            Your note content is processed securely and never stored or used to train our AI models. All processing
            happens in isolated environments with strict data protection measures in place.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link href="/app">
            <Button size="lg" className="mr-4">
              <Sparkles className="mr-2 h-5 w-5" />
              Try AI Summaries Now
            </Button>
          </Link>
          <Link href="/features">
            <Button variant="outline" size="lg">
              Explore More Features
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
