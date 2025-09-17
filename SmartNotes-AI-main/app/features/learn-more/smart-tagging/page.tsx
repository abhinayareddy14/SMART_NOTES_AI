import Link from "next/link"
import { ArrowLeft, Tag, Sparkles, FileText, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SmartTaggingPage() {
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
        <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mr-4">
          <Tag className="h-6 w-6 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold">Smart Tagging</h1>
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <p className="lead text-xl text-gray-600 mb-8">
          SmartNotes AI's intelligent tagging system automatically suggests relevant tags based on your note content,
          making organization effortless and improving discoverability.
        </p>

        <div className="bg-gray-50 border rounded-lg p-6 my-8 flex flex-wrap gap-2">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none">development</Badge>
          <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-none">react</Badge>
          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 border-none">typescript</Badge>
          <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200 border-none">meeting</Badge>
          <Badge className="bg-red-100 text-red-700 hover:bg-red-200 border-none">project</Badge>
          <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-none">learning</Badge>
          <Badge className="bg-cyan-100 text-cyan-700 hover:bg-cyan-200 border-none">ideas</Badge>
          <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-none">research</Badge>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How Smart Tagging Works</h2>
        <p>
          Our AI analyzes the content of your notes to identify key topics, concepts, and themes. It then suggests
          relevant tags that help categorize and organize your information. The system:
        </p>
        <ul className="space-y-2 my-4">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>Identifies main topics and subjects in your content</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>Recognizes key terminology and industry-specific language</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>Suggests consistent tags across similar notes</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>Learns from your tagging preferences over time</span>
          </li>
        </ul>

        <p>
          You can accept suggested tags with a single click or add your own custom tags. The system becomes more
          personalized over time as it learns from your preferences.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-2 flex items-center">
                <Sparkles className="h-5 w-5 text-green-500 mr-2" />
                Effortless Organization
              </h3>
              <p className="text-gray-600">
                Save time by letting AI suggest relevant tags instead of manually categorizing each note.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-2 flex items-center">
                <FileText className="h-5 w-5 text-green-500 mr-2" />
                Improved Discoverability
              </h3>
              <p className="text-gray-600">
                Find related notes easily by browsing tags or using tag-based filters in search.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-2 flex items-center">
                <Tag className="h-5 w-5 text-green-500 mr-2" />
                Consistent Categorization
              </h3>
              <p className="text-gray-600">
                Maintain a consistent tagging system across all your notes, even as your collection grows.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-2 flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                Knowledge Connections
              </h3>
              <p className="text-gray-600">
                Discover connections between notes through shared tags, helping you build a knowledge network.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Advanced Features</h2>
        <p>Our smart tagging system includes several advanced features to enhance your note organization:</p>

        <div className="my-6 space-y-4">
          <div className="bg-gray-50 border rounded-lg p-4">
            <h3 className="font-medium mb-2">Tag Hierarchies</h3>
            <p className="text-gray-600">
              Create parent-child relationships between tags to build a structured organization system.
            </p>
          </div>
          <div className="bg-gray-50 border rounded-lg p-4">
            <h3 className="font-medium mb-2">Tag Analytics</h3>
            <p className="text-gray-600">
              See which tags you use most frequently and how your tagging patterns evolve over time.
            </p>
          </div>
          <div className="bg-gray-50 border rounded-lg p-4">
            <h3 className="font-medium mb-2">Custom Tag Colors</h3>
            <p className="text-gray-600">
              Assign colors to tags for visual organization and quick recognition of important categories.
            </p>
          </div>
          <div className="bg-gray-50 border rounded-lg p-4">
            <h3 className="font-medium mb-2">Tag-Based Workflows</h3>
            <p className="text-gray-600">
              Create automated actions based on tags, such as reminders for notes tagged with "follow-up".
            </p>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-medium mb-2 text-green-800">Pro Tip</h3>
          <p className="text-green-700">
            Combine smart tagging with our AI summaries for the most powerful organization system. Tags help you
            categorize notes, while summaries help you quickly understand their content.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link href="/app">
            <Button size="lg" className="mr-4">
              <Tag className="mr-2 h-5 w-5" />
              Try Smart Tagging Now
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
