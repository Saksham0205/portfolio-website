"use client"

import { useState, useEffect, useRef } from "react"
import { Github, Linkedin, Mail, Phone, ExternalLink, ArrowRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const heroRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<(HTMLElement | null)[]>([])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-lg sm:text-xl font-bold">Saksham</div>
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 6H21M3 12H21M3 18H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
            <div className="hidden md:flex gap-4 lg:gap-6 text-sm lg:text-base">
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
              <a href="#experience" className="hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#projects" className="hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#achievements" className="hover:text-primary transition-colors">
                Achievements
              </a>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-border pt-4">
              <a href="#about" className="hover:text-primary transition-colors" onClick={handleMobileNavClick}>
                About
              </a>
              <a href="#experience" className="hover:text-primary transition-colors" onClick={handleMobileNavClick}>
                Experience
              </a>
              <a href="#projects" className="hover:text-primary transition-colors" onClick={handleMobileNavClick}>
                Projects
              </a>
              <a href="#achievements" className="hover:text-primary transition-colors" onClick={handleMobileNavClick}>
                Achievements
              </a>
              <a href="#contact" className="hover:text-primary transition-colors" onClick={handleMobileNavClick}>
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
              Full-Stack Developer
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">Saksham</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              SDE Intern at Spyne and Founder of Ajnabee. Building scalable products with Next.js, Flutter, and modern
              cloud technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            <div className="flex gap-4 sm:gap-6 pt-2">
              <a
                href="https://github.com/Saksham0205"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://linkedin.com/in/saksham-chauhan-252003"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="mailto:saksham252003@gmail.com" className="hover:text-primary transition-colors">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={addToRefs} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 opacity-0">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12">About</h2>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                I'm a B.Tech Computer Science student at Maharaja Agrasen Institute of Technology, passionate about
                building products that make a difference. Currently working at Spyne as an SDE Intern, where I've
                delivered 5+ production-grade products within six months.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                As the founder of Ajnabee, I'm building a scalable women-first salon booking ecosystem targeting 3.3M+
                users across Delhi-NCR, leading a team of 10 members.
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Education</h3>
              <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">Maharaja Agrasen Institute of Technology</h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      B.Tech in Computer Science and Engineering
                    </p>
                  </div>
                  <span className="text-xs sm:text-sm text-muted-foreground">2022 – 2026</span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mt-2">New Delhi, India</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" ref={addToRefs} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 opacity-0">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12">Experience</h2>
          <div className="space-y-6 sm:space-y-8">
            <Card className="p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow group">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-primary transition-colors">
                    SDE Intern
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className="text-lg sm:text-xl text-muted-foreground">Spyne</p>
                    <a
                      href="https://www.spyne.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      aria-label="Visit Spyne website"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="sm:text-right">
                  <span className="text-sm text-muted-foreground">May 2025 – Present</span>
                  <p className="text-sm text-muted-foreground">Gurgaon, India</p>
                </div>
              </div>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
                <li className="flex gap-2 sm:gap-3">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-1 text-primary" />
                  <span>
                    Delivered 5+ production-grade products within six months, accelerating cross-team delivery cycles.
                  </span>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-1 text-primary" />
                  <span>
                    Architected a multi-channel outbound communication engine enabling automated, AI-driven voice
                    workflows.
                  </span>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-1 text-primary" />
                  <span>
                    Designed and deployed an AI-enabled call insights platform analyzing 100+ sales/service calls weekly
                    with automated scoring.
                  </span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary" className="text-xs">
                  Next.js
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Nest.js
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  MongoDB
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  REST APIs
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  CI/CD
                </Badge>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow group">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-primary transition-colors">
                    Founder
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className="text-lg sm:text-xl text-muted-foreground">Ajnabee</p>
                    <a
                      href="https://ajnabee.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      aria-label="Visit Ajnabee website"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="sm:text-right">
                  <span className="text-sm text-muted-foreground">Jan 2024 – Present</span>
                  <p className="text-sm text-muted-foreground">New Delhi, India</p>
                </div>
              </div>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
                <li className="flex gap-2 sm:gap-3">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-1 text-primary" />
                  <span>
                    Launched a scalable women-first salon booking ecosystem targeting 3.3M+ users across Delhi-NCR.
                  </span>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-1 text-primary" />
                  <span>Implemented robust UPI payment infrastructure, reducing payment failures by 30%.</span>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-1 text-primary" />
                  <span>
                    Directed a 10-member engineering and operations team across product strategy, development, and
                    deployment.
                  </span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary" className="text-xs">
                  Flutter
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Firebase
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Node.js
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Firestore
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  GCP
                </Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={addToRefs} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 opacity-0">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12">Projects</h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Ajnabee salon booking app */}
            <Card className="overflow-hidden hover:shadow-lg transition-all group hover:-translate-y-1">
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                <div className="flex gap-2 h-full p-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                  <img
                    src="https://play-lh.googleusercontent.com/_ZthzOweDAIPnn9x7dl1aE1zhfHq54uYnhonoBWca8T2wFIy7ZRdG0yrepGgLf5fx5Y=w526-h296-rw"
                    alt="Ajnabee Screenshot 1"
                    className="h-full w-auto object-contain snap-center shrink-0 rounded-lg shadow-lg"
                  />
                  <img
                    src="https://play-lh.googleusercontent.com/e-XpjOzK0K9dUpsZR5vcXIPjJ5n5gG9PN3omEBR8qCRG7FTzbjh2uQ0HK8ibzSAOu3DP=w526-h296-rw"
                    alt="Ajnabee Screenshot 2"
                    className="h-full w-auto object-contain snap-center shrink-0 rounded-lg shadow-lg"
                  />
                  <img
                    src="https://play-lh.googleusercontent.com/p1Co7eO5hJCD0CXRT8UYK0YM8CmjvgS71LsjtURdNrKnUhkvSoP460gSMUtwg2dSY2I=w526-h296-rw"
                    alt="Ajnabee Screenshot 3"
                    className="h-full w-auto object-contain snap-center shrink-0 rounded-lg shadow-lg"
                  />
                  <img
                    src="https://play-lh.googleusercontent.com/owDGmGIRDoUTEZ2EcHc94tOxSdlIJn2jmmGp-_b5scSs857xM_-sici3lqT3w0_ZO4a1=w526-h296-rw"
                    alt="Ajnabee Screenshot 4"
                    className="h-full w-auto object-contain snap-center shrink-0 rounded-lg shadow-lg"
                  />
                  <img
                    src="https://play-lh.googleusercontent.com/eSV4Wd-aQ3TifsjYzkBB8NYIFc1du4aH0qqn_krKVvmxbh3d23ZOlF3MBpDDo3y7jg=w526-h296-rw"
                    alt="Ajnabee Screenshot 5"
                    className="h-full w-auto object-contain snap-center shrink-0 rounded-lg shadow-lg"
                  />
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-primary transition-colors">
                    Ajnabee
                  </h3>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.ajnabee.ajnabee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80"
                  >
                    <ExternalLink className="w-5 h-5 shrink-0" />
                  </a>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  One-stop solution for hassle-free salon booking for women. Explore top salons, book appointments
                  instantly, and manage bookings with real-time availability and ratings.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Flutter
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Firebase
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    REST APIs
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Payment Integration
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Ajnabee Partner */}
            <Card className="overflow-hidden hover:shadow-lg transition-all group hover:-translate-y-1">
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                <div className="flex gap-2 h-full p-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                  <img
                    src="https://play-lh.googleusercontent.com/B7_pbAzEiWn5RBs5ecjJDoq4A9Jy8UN5DwJHmbi4KjkJ4V9VccHShibPXvOED0L0e6I=w526-h296-rw"
                    alt="Ajnabee Partner Screenshot 1"
                    className="h-full w-auto object-contain snap-center shrink-0 rounded-lg shadow-lg"
                  />
                  <img
                    src="https://play-lh.googleusercontent.com/NxWC1GsZEwcKJTeT2QNZrgCEj1qqbn8RIDGBhCfUsi4c94oESNBzK12VVRQSd_C6Z8k=w526-h296-rw"
                    alt="Ajnabee Partner Screenshot 2"
                    className="h-full w-auto object-contain snap-center shrink-0 rounded-lg shadow-lg"
                  />
                  <img
                    src="https://play-lh.googleusercontent.com/vDmhF5-Ixf4Q5ZAEh-rTTqUB5E-DqNBIrB_aD1MG-4l4-buXxLy8KmYKp_ptZd7sgLY=w526-h296-rw"
                    alt="Ajnabee Partner Screenshot 3"
                    className="h-full w-auto object-contain snap-center shrink-0 rounded-lg shadow-lg"
                  />
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-primary transition-colors">
                    Ajnabee Partner
                  </h3>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.ajnabeecorp.ajnabee_partner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80"
                  >
                    <ExternalLink className="w-5 h-5 shrink-0" />
                  </a>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Created a salon-operations platform with integrated payments and workflow automation, improving
                  efficiency by 40%. Built scalable state management using Bloc/Provider.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Flutter
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Firebase
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    REST APIs
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Reswipe */}
            <Card className="overflow-hidden hover:shadow-lg transition-all group hover:-translate-y-1">
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                <div className="flex gap-2 h-full p-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                  <img
                    src="/images/reswipe-1.jpg"
                    alt="ReSwipe job listing with swipe interaction"
                    className="h-full w-auto object-contain snap-center shrink-0 rounded-lg shadow-lg"
                  />
                  <img
                    src="/images/reswipe-5.jpg"
                    alt="ReSwipe AI matching analysis"
                    className="h-full w-auto object-contain snap-center shrink-0 rounded-lg shadow-lg"
                  />
                  <img
                    src="/images/reswipe-6.jpg"
                    alt="ReSwipe profile with swipe interface"
                    className="h-full w-auto object-contain snap-center shrink-0 rounded-lg shadow-lg"
                  />
                  <img
                    src="/images/reswipe-2.jpg"
                    alt="ReSwipe applications tracking"
                    className="h-full w-auto object-contain snap-center shrink-0 rounded-lg shadow-lg"
                  />
                  <img
                    src="/images/reswipe-4.jpg"
                    alt="ReSwipe user profile"
                    className="h-full w-auto object-contain snap-center shrink-0 rounded-lg shadow-lg"
                  />
                  <img
                    src="/images/reswipe-3.jpg"
                    alt="ReSwipe settings and AI features"
                    className="h-full w-auto object-contain snap-center shrink-0 rounded-lg shadow-lg"
                  />
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-primary transition-colors">
                    Reswipe
                  </h3>
                  <a
                    href="https://github.com/Saksham0205"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80"
                  >
                    <ExternalLink className="w-5 h-5 shrink-0" />
                  </a>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Developed an ML-powered resume-matching and recommendation engine with swipe-based UX. Boosted user
                  engagement by 50% through real-time personalization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Flutter
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Firebase
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    ML
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={addToRefs} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 opacity-0">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="text-xs">Python</Badge>
                <Badge className="text-xs">C/C++</Badge>
                <Badge className="text-xs">Dart</Badge>
                <Badge className="text-xs">SQL</Badge>
                <Badge className="text-xs">JavaScript</Badge>
                <Badge className="text-xs">TypeScript</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="text-xs">REST APIs</Badge>
                <Badge className="text-xs">Firebase</Badge>
                <Badge className="text-xs">MongoDB</Badge>
                <Badge className="text-xs">SQL</Badge>
                <Badge className="text-xs">Docker</Badge>
                <Badge className="text-xs">Postman</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="text-xs">Flutter</Badge>
                <Badge className="text-xs">Node.js</Badge>
                <Badge className="text-xs">Nest.js</Badge>
                <Badge className="text-xs">Next.js</Badge>
                <Badge className="text-xs">Bloc/Provider</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="text-xs">Git</Badge>
                <Badge className="text-xs">CI/CD</Badge>
                <Badge className="text-xs">Android Studio</Badge>
                <Badge className="text-xs">AWS</Badge>
                <Badge className="text-xs">GCP</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" ref={addToRefs} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 opacity-0">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12">Achievements</h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-base sm:text-lg mb-2">IIIT Delhi 25 Under 25 Winner</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Recognized for building a high-impact, scalable tech solution.
              </p>
            </Card>
            <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-base sm:text-lg mb-2">Tech.Future Hackathon Finalist (IIT Delhi)</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Ranked Top 25 out of 500+ teams.</p>
            </Card>
            <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-base sm:text-lg mb-2">Pitch Your Idea Summit Winner</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Presented solutions to 10+ investors.</p>
            </Card>
            <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-base sm:text-lg mb-2">Survive-AI Winner</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Built resilient AI architecture outperforming 100+ teams.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section ref={addToRefs} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 opacity-0">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12">Leadership</h2>
          <div className="space-y-4 sm:space-y-6">
            <Card className="p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">Flutter Mentor</h3>
                  <p className="text-base sm:text-lg text-muted-foreground">GDG MAIT</p>
                </div>
                <span className="text-sm text-muted-foreground">Sept 2024 – Apr 2025</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">
                Trained 100+ developers across structured Flutter workshops and hands-on sessions.
              </p>
            </Card>
            <Card className="p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">P.R Head</h3>
                  <p className="text-base sm:text-lg text-muted-foreground">TechCom, MAIT</p>
                </div>
                <span className="text-sm text-muted-foreground">Oct 2023 – Present</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">
                Managed outreach and execution for HackWithMAIT and ML/Blockchain events with 1000+ participants.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={addToRefs} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 opacity-0">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Let's Connect</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-12 px-4">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="mailto:saksham252003@gmail.com">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Email Me
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
              <a href="tel:+918376063400">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                +91-8376063400
              </a>
            </Button>
          </div>
          <div className="flex gap-6 justify-center mt-8 sm:mt-12">
            <a
              href="https://github.com/Saksham0205"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://linkedin.com/in/saksham-chauhan-252003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:saksham252003@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 sm:py-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl text-center text-sm sm:text-base text-muted-foreground">
          <p>© 2025 Saksham</p>
        </div>
      </footer>
    </div>
  )
}
