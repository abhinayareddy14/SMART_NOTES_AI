import Link from "next/link"
import {
  ArrowRight,
  Brain,
  Sparkles,
  Tag,
  Search,
  Clock,
  Shield,
  Zap,
  Users,
  Globe,
  Smartphone,
  Database,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FeaturesPage() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Summaries",
      description: "Automatically generate concise summaries of your notes to quickly grasp key points.",
      details: [
        "Advanced natural language processing",
        "Context-aware summarization",
        "Multiple summary lengths",
        "Key point extraction",
      ],
      color: "blue",
    },
    {
      icon: Tag,
      title: "Smart Tagging",
      description: "Get intelligent tag suggestions based on your note content for better organization.",
      details: ["AI-powered tag suggestions", "Automatic categorization", "Custom tag creation", "Tag-based filtering"],
      color: "green",
    },
    {
      icon: Search,
      title: "Advanced Search",
      description: "Find exactly what you need with our powerful search capabilities across all your notes.",
      details: ["Full-text search", "Tag-based filtering", "Date range queries", "Content type filtering"],
      color: "purple",
    },
    {
      icon: Clock,
      title: "Real-time Sync",
      description: "Access your notes from anywhere with seamless synchronization across devices.",
      details: ["Instant synchronization", "Offline access", "Conflict resolution", "Version history"],
      color: "amber",
    },
    {
      icon: Shield,
      title: "Privacy-Focused",
      description: "Your notes are encrypted and secure, ensuring your data remains private.",
      details: ["End-to-end encryption", "Zero-knowledge architecture", "GDPR compliant", "Regular security audits"],
      color: "red",
    },
    {
      icon: Zap,
      title: "API Integration",
      description: "Connect with your favorite tools and services for a seamless workflow.",
      details: ["RESTful API", "Webhook support", "Third-party integrations", "Custom automations"],
      color: "indigo",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share notes and collaborate with your team in real-time.",
      details: ["Real-time collaboration", "Permission management", "Comment system", "Activity tracking"],
      color: "pink",
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Take notes in any language with full Unicode support and AI analysis.",
      details: ["50+ languages supported", "RTL text support", "Language detection", "Translation features"],
      color: "cyan",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native mobile apps for iOS and Android with full feature parity.",
      details: ["Native iOS app", "Native Android app", "Offline capabilities", "Push notifications"],
      color: "emerald",
    },
    {
      icon: Database,
      title: "Data Export",
      description: "Export your notes in multiple formats and maintain full control of your data.",
      details: ["Multiple export formats", "Bulk operations", "Scheduled backups", "Data portability"],
      color: "orange",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      amber: "bg-amber-100 text-amber-600",
      red: "bg-red-100 text-red-600",
      indigo: "bg-indigo-100 text-indigo-600",
      pink: "bg-pink-100 text-pink-600",
      cyan: "bg-cyan-100 text-cyan-600",
      emerald: "bg-emerald-100 text-emerald-600",
      orange: "bg-orange-100 text-orange-600",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl">SmartNotes AI</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/features" className="text-blue-600 font-medium">
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
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4" variant="outline">
              <Sparkles className="h-3.5 w-3.5 mr-1" />
              All Features
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for Modern Note-Taking
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Discover all the intelligent features that make SmartNotes AI the most advanced note-taking platform. From
              AI-powered summaries to real-time collaboration, we've got everything you need.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/app">
                <Button size="lg">
                  Launch Application <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline">
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-lg ${getColorClasses(feature.color)} flex items-center justify-center mb-4`}
                    >
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  {feature.title === "AI-Powered Summaries" ? (
                    <CardFooter>
                      <Link href="/features/learn-more/ai-summaries">
                        <Button variant="ghost" className="text-blue-600 p-0 hover:text-blue-800 hover:bg-transparent">
                          Learn more <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  ) : null}
                  {feature.title === "Smart Tagging" ? (
                    <CardFooter>
                      <Link href="/features/learn-more/smart-tagging">
                        <Button variant="ghost" className="text-blue-600 p-0 hover:text-blue-800 hover:bg-transparent">
                          Learn more <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  ) : null}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience These Features?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Start using SmartNotes AI today and discover how intelligent note-taking can transform your productivity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/app">
                <Button size="lg" variant="secondary">
                  Launch Application
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6 text-blue-400" />
                <span className="font-bold text-xl text-white">SmartNotes AI</span>
              </Link>
              <p className="text-gray-400 mb-4">
                Your intelligent note-taking companion powered by artificial intelligence.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
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
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} SmartNotes AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
