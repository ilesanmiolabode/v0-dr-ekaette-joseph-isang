import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Heart, Users, Target, Zap, Clock, CheckCircle } from "lucide-react"

export default function CoachingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Executive Coaching</h1>
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto">
              Transform your career and leadership capabilities through personalized coaching with Dr. Ekaette Joseph-Isang
            </p>
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0POpmmqtCOnoWSRqQtmriyEAFkkXrcpIhRMDGVygXPrk42Kmw6b6lVtSUNK36XBKbsKr6EA0vj" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-secondary font-bold px-8 py-6 text-lg">
                Book Discovery Call
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Why Choose This Coaching?</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Work one-on-one with Dr. Ekaette Joseph-Isang to transform your career trajectory and achieve your professional goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Executive Focus",
                  description:
                    "Tailored coaching designed specifically for healthcare leaders, covering strategic decision-making and organizational transformation.",
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Proven Strategies",
                  description:
                    "Leverage 20+ years of healthcare executive experience with strategies that drive measurable results and sustainable outcomes.",
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Industry Expertise",
                  description:
                    "Gain insights from a leader with deep knowledge in value-based care, operations, and healthcare transformation.",
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Accelerated Growth",
                  description:
                    "Fast-track your career development through focused, intensive coaching sessions addressing your critical challenges.",
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "Flexible Scheduling",
                  description:
                    "Sessions tailored to your busy executive schedule, including virtual meetings for maximum convenience.",
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "Personal Brand Building",
                  description:
                    "Develop a compelling professional narrative and stand out as a thought leader in healthcare.",
                },
              ].map((benefit, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300 bg-card/50 backdrop-blur-sm border border-border/50">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-lg font-bold">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Areas Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Coaching Focus Areas</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Transform your leadership and advance your healthcare career</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  category: "Strategic Leadership",
                  areas: [
                    "Executive presence and influence",
                    "Strategic planning and execution",
                    "Organizational transformation",
                    "Stakeholder management",
                    "Leadership decision-making",
                  ],
                },
                {
                  category: "Healthcare Operations",
                  areas: [
                    "Value-based care optimization",
                    "Cost management strategies",
                    "Risk adjustment and compliance",
                    "Clinical documentation integrity",
                    "Regulatory and audit readiness",
                  ],
                },
                {
                  category: "Career Advancement",
                  areas: [
                    "Executive positioning and branding",
                    "Career trajectory planning",
                    "Thought leadership development",
                    "Industry networking strategy",
                    "Board readiness preparation",
                  ],
                },
                {
                  category: "Professional Excellence",
                  areas: [
                    "Performance optimization",
                    "Work-life integration",
                    "Personal productivity systems",
                    "Confidence and executive presence",
                    "Sustainable success strategies",
                  ],
                },
              ].map((area, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border border-border/50">
                  <CardHeader className="bg-primary/5 border-b border-border/50">
                    <CardTitle className="text-lg font-bold text-primary">{area.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {area.areas.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Process Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Coaching Journey</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">A seven-step structured approach designed for sustainable career transformation</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Discovery Call",
                  description:
                    "Free 30-minute consultation to understand your goals, challenges, and determine if we're a good fit for working together.",
                },
                {
                  step: "2",
                  title: "Analysis",
                  description:
                    "Comprehensive evaluation of your work experience",
                },
                {
                  step: "3",
                  title: "Clarity",
                  description:
                    "Matching you to best fit roles",
                },
                {
                  step: "4",
                  title: "Transformation",
                  description:
                    "Customized training tailored to help you reinvent yourself in 90 days",
                },
                {
                  step: "5",
                  title: "Integration",
                  description:
                    "Bring the results of your analysis, clarity, transformation training into defining a brand new you",
                },
                {
                  step: "6",
                  title: "Ownership",
                  description:
                    "We teach you how to tell your story and stand out from the crowd",
                },
                {
                  step: "7",
                  title: "Niching",
                  description:
                    "Many people stay shallow and at surface level. We show you how to drill down and execute like an expert",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6 p-6 rounded-lg border border-border/50 bg-card/50 hover:bg-card transition-colors duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 shadow-lg">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Coaching Packages</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Choose the level of support that's right for your professional journey</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur-sm">
                <CardHeader className="bg-primary/5 border-b border-border/50">
                  <CardTitle className="text-2xl font-bold text-foreground">Starter Package</CardTitle>
                  <CardDescription className="text-muted-foreground">Perfect for focused, short-term goals</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-8">
                    <p className="text-4xl font-bold text-primary mb-2">$497</p>
                    <p className="text-muted-foreground font-medium">3 sessions over 6 weeks</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">3 x 60-minute coaching sessions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Executive assessment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Custom action plan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Email support between sessions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Resource library access</span>
                    </li>
                  </ul>

                  <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0POpmmqtCOnoWSRqQtmriyEAFkkXrcpIhRMDGVygXPrk42Kmw6b6lVtSUNK36XBKbsKr6EA0vj" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-primary hover:bg-primary/90 font-bold py-6 text-lg">Get Started</Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent shadow-lg hover:shadow-xl transition-all duration-300 relative bg-card/50 backdrop-blur-sm">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
                <CardHeader className="bg-gradient-to-r from-primary to-accent text-white border-b-2 border-accent">
                  <CardTitle className="text-2xl font-bold">Transformation Package</CardTitle>
                  <CardDescription className="text-white/90">Comprehensive support for lasting change</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-8">
                    <p className="text-4xl font-bold text-accent mb-2">$1,297</p>
                    <p className="text-muted-foreground font-medium">6 sessions over 3 months</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">6 x 60-minute coaching sessions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Comprehensive executive assessment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Personalized transformation roadmap</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Unlimited email & text support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Weekly check-in calls</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Custom worksheets & exercises</span>
                    </li>
                  </ul>

                  <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0POpmmqtCOnoWSRqQtmriyEAFkkXrcpIhRMDGVygXPrk42Kmw6b6lVtSUNK36XBKbsKr6EA0vj" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-secondary font-bold py-6 text-lg">Transform Now</Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur-sm">
                <CardHeader className="bg-secondary text-secondary-foreground border-b border-border/50">
                  <CardTitle className="text-2xl font-bold">Mastery Package</CardTitle>
                  <CardDescription className="text-secondary-foreground/70">Deep, intensive work for comprehensive transformation</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-8">
                    <p className="text-4xl font-bold text-secondary mb-2">$2,497</p>
                    <p className="text-muted-foreground font-medium">12 sessions over 6 months</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">12 x 60-minute coaching sessions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Deep executive assessment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Comprehensive mastery program</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Priority support access</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Monthly progress reviews</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Bonus: Private mastermind group</span>
                    </li>
                  </ul>

                  <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0POpmmqtCOnoWSRqQtmriyEAFkkXrcpIhRMDGVygXPrk42Kmw6b6lVtSUNK36XBKbsKr6EA0vj" target="_blank" rel="noopener noreferrer">
                    <Button
                      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-6 text-lg"
                    >
                      Start Mastery Journey
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 text-center">
              <p className="text-muted-foreground mb-4 font-medium">All packages include a 30-day satisfaction guarantee</p>
              <p className="text-sm text-muted-foreground">Payment plans available for Transformation and Mastery packages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">Client Success Stories</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur-sm border border-border/50">
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground mb-6 italic leading-relaxed">
                    "Working with Dr. Ekaette Joseph-Isang has been transformative for my career. Her strategic guidance and industry expertise helped me advance from a director to executive leadership. Highly recommended."
                  </p>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">Jennifer M.</p>
                    <p className="text-muted-foreground text-sm">Healthcare Director</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur-sm border border-border/50">
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground mb-6 italic leading-relaxed">
                    "Dr. Ekaette's executive coaching helped me navigate organizational transformation and lead my team through significant change. Her healthcare expertise and leadership insights were invaluable."
                  </p>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">David R.</p>
                    <p className="text-muted-foreground text-sm">Hospital Operations Officer</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-primary via-secondary to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Advance Your Career?</h2>
          <p className="text-lg md:text-xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Book a free 30-minute discovery call with Dr. Ekaette Joseph-Isang to explore how executive coaching can accelerate your professional growth and leadership impact
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0POpmmqtCOnoWSRqQtmriyEAFkkXrcpIhRMDGVygXPrk42Kmw6b6lVtSUNK36XBKbsKr6EA0vj" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-secondary font-bold px-8 py-6 text-lg">
                Book Discovery Call
              </Button>
            </a>
            <Link href="/services">
              <Button
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent font-bold px-8 py-6 text-lg"
              >
                Take Assessment First
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
