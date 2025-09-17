import Link from "next/link"
import { ArrowRight, Brain, Sparkles, Tag, Search, Clock, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl">SmartNotes AI</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/features" className="text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/demo" className="text-gray-600 hover:text-gray-900">
              Demo
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Link href="/app">
              <Button>Launch App</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Revolutionize Your Note-Taking Experience
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-lg">
                  SmartNotes AI transforms how you capture and organize information with intelligent tagging, summaries,
                  and insights powered by artificial intelligence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/app">
                    <Button size="lg" className="w-full sm:w-auto">
                      Launch App <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/demo">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      View Demo
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="relative z-10 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
                  <div className="p-4 bg-gray-50 border-b border-gray-100 flex items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="mx-auto font-medium text-sm text-gray-500">SmartNotes AI</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <Search className="h-4 w-4 text-gray-400 mr-2" />
                        <div className="text-sm text-gray-400">Search notes...</div>
                      </div>
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        <Tag className="h-3 w-3 mr-1" /> 5 tags
                      </Badge>
                    </div>
                    <div className="space-y-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Project Ideas</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600">
                            Build a smart notes app with React and TypeScript. Include features like tagging, search,
                            and responsive design.
                          </p>
                          <div className="flex flex-wrap gap-1 mt-3">
                            <Badge variant="secondary" className="text-xs">
                              development
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              react
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              typescript
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Meeting Notes</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="p-2 bg-blue-50 rounded-md border-l-2 border-blue-200 mb-3">
                            <p className="text-xs text-blue-800 font-medium">AI Summary</p>
                            <p className="text-xs text-blue-700">
                              Product roadmap discussion covering user feedback, mobile development, and AI features.
                            </p>
                          </div>
                          <p className="text-sm text-gray-600">
                            Discussed the new product roadmap. Key points: user feedback integration, mobile app
                            development, and AI features.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4" variant="outline">
                <Sparkles className="h-3.5 w-3.5 mr-1" />
                Smart Features
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Enhance Your Productivity</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover how SmartNotes AI can transform your note-taking and organization with these powerful features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>AI-Powered Summaries</CardTitle>
                  <CardDescription>
                    Automatically generate concise summaries of your notes to quickly grasp key points.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our advanced AI analyzes your notes and extracts the most important information, saving you time and
                    helping you focus on what matters.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/features/learn-more/ai-summaries">
                    <Button variant="ghost" className="text-blue-600 p-0 hover:text-blue-800 hover:bg-transparent">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                    <Tag className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Smart Tagging</CardTitle>
                  <CardDescription>
                    Get intelligent tag suggestions based on your note content for better organization.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Stop manually categorizing your notes. Our AI suggests relevant tags based on content analysis,
                    making organization effortless.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/features/learn-more/smart-tagging">
                    <Button variant="ghost" className="text-blue-600 p-0 hover:text-blue-800 hover:bg-transparent">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                    <Search className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Advanced Search</CardTitle>
                  <CardDescription>
                    Find exactly what you need with our powerful search capabilities across all your notes.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Search through titles, content, tags, and even AI-generated summaries to quickly locate the
                    information you need.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/features">
                    <Button variant="ghost" className="text-blue-600 p-0 hover:text-blue-800 hover:bg-transparent">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <CardTitle>Real-time Sync</CardTitle>
                  <CardDescription>
                    Access your notes from anywhere with seamless synchronization across devices.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Your notes are instantly available on all your devices. Start on your phone and continue on your
                    computer without missing a beat.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/features">
                    <Button variant="ghost" className="text-blue-600 p-0 hover:text-blue-800 hover:bg-transparent">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle>Privacy-Focused</CardTitle>
                  <CardDescription>
                    Your notes are encrypted and secure, ensuring your data remains private.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We use end-to-end encryption to protect your sensitive information. Your data is yours alone and
                    never used for training AI models.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/features">
                    <Button variant="ghost" className="text-blue-600 p-0 hover:text-blue-800 hover:bg-transparent">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle>API Integration</CardTitle>
                  <CardDescription>
                    Connect with your favorite tools and services for a seamless workflow.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Integrate with productivity apps, calendars, and task managers to create a unified workspace that
                    enhances your productivity.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/features">
                    <Button variant="ghost" className="text-blue-600 p-0 hover:text-blue-800 hover:bg-transparent">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Note-Taking?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Experience the power of AI-enhanced note-taking with SmartNotes AI. Start organizing your thoughts more
              effectively today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/app">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Launch Application
                </Button>
              </Link>
              <Link href="/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/10 w-full sm:w-auto"
                >
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6 text-blue-400" />
                <span className="font-bold text-xl text-white">SmartNotes AI</span>
              </div>
              <p className="text-gray-400 mb-4">An academic project by Tejasree, Vignan University.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Project</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/app" className="hover:text-white transition-colors">
                    Application
                  </Link>
                </li>
                <li>
                  <Link href="/demo" className="hover:text-white transition-colors">
                    Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/documentation" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="hover:text-white transition-colors">
                    API Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Vignan University
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} SmartNotes AI by Tejasree. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
