import { ExternalLink, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceProps {
  addToRefs: (el: HTMLElement | null) => void
}

export function Experience({ addToRefs }: ExperienceProps) {
  return (
    <section id="experience" ref={addToRefs} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 opacity-0">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12">Experience</h2>
        <div className="space-y-6 sm:space-y-8">

          {/* OmniDimension */}
          <Card className="p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow group">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-primary transition-colors">
                  Product Engineer – Voice AI Agents
                </h3>
                <div className="flex items-center gap-2">
                  <p className="text-lg sm:text-xl text-muted-foreground">OmniDimension</p>
                  <a
                    href="https://omnidim.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                    aria-label="Visit OmniDimension website"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="sm:text-right">
                <span className="text-sm text-muted-foreground">May 2026 – Present</span>
                <p className="text-sm text-muted-foreground">Remote – US</p>
              </div>
            </div>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground mb-4">
              <li className="flex gap-2 sm:gap-3">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-1 text-primary" />
                <span>
                  Collaborated directly with customers and internal teams to scope agent requirements, design advanced
                  workflows and deliver new capabilities.
                </span>
              </li>
              <li className="flex gap-2 sm:gap-3">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-1 text-primary" />
                <span>
                  <span className="font-medium text-foreground">Technologies:</span> Voice AI / Conversational Agents,
                  LLMs, Prompt Engineering, Python, REST APIs, Analytics pipelines
                </span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {["Voice AI", "LLMs", "Prompt Engineering", "Python", "REST APIs"].map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Aftershoot */}
          {/* <Card className="p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow group">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-primary transition-colors">
                  AI Product Intern
                </h3>
                <div className="flex items-center gap-2">
                  <p className="text-lg sm:text-xl text-muted-foreground">Aftershoot</p>
                  <a
                    href="https://aftershoot.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                    aria-label="Visit Aftershoot website"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="sm:text-right">
                <span className="text-sm text-muted-foreground">Feb 2026 – Apr 2026</span>
                <p className="text-sm text-muted-foreground">New Delhi, India</p>
              </div>
            </div>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground mb-4">
              <li className="flex gap-2 sm:gap-3">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-1 text-primary" />
                <span>
                  Shipped a high-impact image compression feature solo: self-defined aggressive targets (under 12 MB
                  from 200 MB+ RAW files), wrote the full product spec, partnered with Engineering to scope and deliver
                  — significantly reducing export friction and improving experience for power users.
                </span>
              </li>
              <li className="flex gap-2 sm:gap-3">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-1 text-primary" />
                <span>
                  Built <strong className="text-foreground">5+ internal analytics dashboards</strong> tracking user activity, feature adoption, and
                  retention signals, directly enabling data-driven sprint prioritization and cross-team alignment on
                  the most impactful AI product initiatives and owned user research end-to-end.
                </span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {["Product Management", "User Research", "Analytics", "AI/ML Products", "Roadmapping"].map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </Card> */}

          {/* Spyne */}
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
                <span className="text-sm text-muted-foreground">May 2025 – Jan 2026</span>
                <p className="text-sm text-muted-foreground">Gurgaon, India</p>
              </div>
            </div>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground mb-4">
              <li className="flex gap-2 sm:gap-3">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-1 text-primary" />
                <span>
                  Delivered 5+ production-grade products within six months, accelerating cross-team delivery cycles.
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

            {/* Featured Build: Conversational AI */}
            <div className="border-l-2 border-primary/40 pl-3 sm:pl-4 mb-4 space-y-2">
              <p className="text-[10px] sm:text-xs font-semibold text-primary uppercase tracking-widest">
                Featured Build
              </p>
              <p className="text-sm sm:text-base font-semibold">Conversational AI for Car Dealers</p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Virtual sales assistant handling after-hours inbound calls — understands customer intent, answers
                inventory queries, and schedules appointments autonomously with a human-like voice.
              </p>

              {/* Pipeline */}
              <div className="flex flex-wrap items-center gap-x-1 gap-y-1.5 pt-1">
                {["Inbound Call", "Speech-to-Text", "LLM Intent", "Response Gen", "Text-to-Speech", "Action"].map(
                  (step, i, arr) => (
                    <div key={step} className="flex items-center gap-1">
                      <span className="text-xs bg-muted rounded px-2 py-0.5 font-medium text-foreground/80 whitespace-nowrap">
                        {step}
                      </span>
                      {i < arr.length - 1 && (
                        <span className="text-muted-foreground/60 text-xs select-none">→</span>
                      )}
                    </div>
                  )
                )}
              </div>

              {/* Integrations */}
              <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                <span className="text-xs text-muted-foreground">via</span>
                {["Vapi", "ElevenLabs"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs border border-primary/30 text-primary/80 rounded px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
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
                    href="https://play.google.com/store/apps/details?id=com.ajnabee.ajnabee"
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
                <span className="text-sm text-muted-foreground">Jan 2024 – May 2025</span>
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
  )
}

