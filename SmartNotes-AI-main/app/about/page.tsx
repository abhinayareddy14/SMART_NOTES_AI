import Link from "next/link"
import Image from "next/image"
import { Brain, Users, Target, Award, ArrowRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  const team = [
    {
      name: "Tejasree",
      role: "Creator & Developer",
      bio: "Computer Science student at Vignan University with a passion for AI and web development. Created SmartNotes AI as an innovative project combining modern web technologies with artificial intelligence.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        github: "#",
      },
    },
    {
      name: "Manohar",
      role: "Creator & Developer",
      bio: "Computer Science student at Vignan University with a passion for AI and web development. Created SmartNotes AI as an innovative project combining modern web technologies with artificial intelligence.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        github: "#",
      },
    },
  ]

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description:
        "Pushing the boundaries of what's possible with AI to create truly intelligent note-taking experiences.",
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Every feature is built starting with understanding users' needs and pain points.",
    },
    {
      icon: Target,
      title: "Privacy by Design",
      description:
        "Built with the belief that your thoughts and ideas should remain private. Security and privacy are fundamental.",
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Created as part of academic pursuit of excellence in software development and AI integration.",
    },
  ]

  const milestones = [
    {
      year: "2024",
      title: "Project Inception",
      description: "SmartNotes AI was conceptualized as an academic project at Vignan University.",
    },
    {
      year: "2024",
      title: "Development Phase",
      description:
        "Built using Next.js, React, and modern AI technologies to create an intelligent note-taking application.",
    },
    {
      year: "2024",
      title: "Feature Implementation",
      description: "Successfully implemented AI-powered features including smart tagging and note summarization.",
    },
    {
      year: "2024",
      title: "Project Showcase",
      description: "Completed and showcased as a demonstration of modern web development and AI integration.",
    },
  ]

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
            <Link href="/features" className="text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="/about" className="text-blue-600 font-medium">
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
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About SmartNotes AI</h1>
              <p className="text-xl text-gray-700 mb-8">
                SmartNotes AI was created by Tejasree and Manohar, students at Vignan University, with a vision to
                revolutionize note-taking through artificial intelligence. This project demonstrates how AI can make
                knowledge work more efficient, creative, and enjoyable.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/app">
                  <Button size="lg">
                    Try The Application <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Project Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Project Overview</h2>
                <p className="text-lg text-gray-700 mb-6">
                  SmartNotes AI is an academic project that demonstrates the integration of artificial intelligence with
                  modern web development. It showcases how AI can enhance the note-taking experience by providing
                  intelligent features like automatic summarization and smart tagging.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Built using Next.js, React, and Tailwind CSS, this application represents the culmination of knowledge
                  in full-stack development and AI integration learned at Vignan University.
                </p>
                <Link href="/features">
                  <Button>
                    Explore Features <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="font-semibold text-lg mb-4">Technologies Used</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-blue-600">Next.js</div>
                        <div className="text-sm text-gray-600">Framework</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-green-600">React</div>
                        <div className="text-sm text-gray-600">UI Library</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-purple-600">Tailwind</div>
                        <div className="text-sm text-gray-600">Styling</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-orange-600">AI</div>
                        <div className="text-sm text-gray-600">Intelligence</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                These core values guided the development of SmartNotes AI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-none shadow-md text-center">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Creator Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet The Creators</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">The minds behind SmartNotes AI.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="border-none shadow-md text-center">
                  <CardHeader>
                    <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-blue-600 font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                    <div className="flex justify-center space-x-3">
                      {member.social.github && (
                        <Link href={member.social.github} className="text-gray-400 hover:text-gray-900">
                          <Github className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Journey</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">The development timeline of SmartNotes AI.</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                      <Card className="border-none shadow-md">
                        <CardHeader>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                              {milestone.year.slice(-2)}
                            </div>
                            <CardTitle className="text-xl">{milestone.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base">{milestone.description}</CardDescription>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full border-4 border-white"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience SmartNotes AI</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Try out this academic project showcasing the integration of AI with modern web development.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/app">
                <Button size="lg" variant="secondary">
                  Launch Application
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  View Demo
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
              <p className="text-gray-400 mb-4">An academic project by Tejasree and Manohar, Vignan University.</p>
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
            <p>&copy; {new Date().getFullYear()} SmartNotes AI by Tejasree and Manohar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
