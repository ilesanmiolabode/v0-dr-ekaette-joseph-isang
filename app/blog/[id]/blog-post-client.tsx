"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Bookmark,
  ArrowRight,
  Sparkles,
  CheckCircle,
  AlertTriangle,
} from "lucide-react"
import { useState, useEffect } from "react"
import { blogPosts } from "./blog-data"

export function BlogPostClient() {
  const params = useParams()
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsVisible(true)
  }, [])

  const id = mounted && params?.id ? String(params.id) : null
  const post = id ? blogPosts[id] : null

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you are looking for does not exist or has been moved.
          </p>
          <Link href="/blog">
            <Button className="bg-primary hover:bg-primary/90">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  // ... rest of the blog post rendering logic
  return (
    <div className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      {/* Blog post content will be rendered here */}
      <div className="min-h-screen bg-background">
        <article className="bg-background py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Navigation */}
            <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            {/* Post Header */}
            <header className={`mb-8 ${isVisible ? "slide-in-left" : ""}`}>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-foreground">{post.title}</h1>

              {/* Post Meta */}
              <div className="flex flex-wrap gap-6 text-muted-foreground mb-8 border-b pb-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </header>

            {/* Hero Image */}
            {post.image && (
              <div className="mb-12 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Post Content */}
            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{post.content.intro}</p>

              {post.content.sections.map((section, index) => (
                <section key={index} className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 mt-8 text-foreground flex items-center gap-2">
                    <Sparkles className="h-6 w-6 text-accent" />
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{section.content}</p>

                  {section.items && (
                    <ul className="space-y-3 my-4 ml-4">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex gap-3">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.phases && (
                    <div className="space-y-6 my-6">
                      {section.phases.map((phase, phaseIndex) => (
                        <div key={phaseIndex} className="border-l-4 border-accent pl-4 py-2">
                          <h3 className="font-bold text-foreground mb-2">{phase.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            <strong>Objective:</strong> {phase.objective}
                          </p>
                          <div className="mb-2">
                            <p className="text-sm font-semibold text-foreground mb-1">Activities:</p>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {phase.activities.map((activity, actIndex) => (
                                <li key={actIndex}>{activity}</li>
                              ))}
                            </ul>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            <strong>Results:</strong> {phase.results}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.successFactors && (
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 my-4">
                      <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Critical Success Factors
                      </p>
                      <ul className="space-y-2">
                        {section.successFactors.map((factor, factorIndex) => (
                          <li key={factorIndex} className="text-sm text-muted-foreground">
                            {factor}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.failureModes && (
                    <div className="bg-orange-500/5 border border-orange-500/20 rounded-lg p-4 my-4">
                      <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-orange-500" />
                        Common Failure Modes
                      </p>
                      <ul className="space-y-2">
                        {section.failureModes.map((mode, modeIndex) => (
                          <li key={modeIndex} className="text-sm text-muted-foreground">
                            {mode}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.subsections && (
                    <div className="space-y-4 mt-6">
                      {section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex}>
                          <h4 className="font-semibold text-foreground mb-2">{subsection.title}</h4>
                          <p className="text-muted-foreground mb-2">{subsection.content}</p>
                          {subsection.items && (
                            <ul className="list-disc list-inside ml-4 space-y-1">
                              {subsection.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-muted-foreground text-sm">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}

              {/* Conclusion */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 mt-8 text-foreground">Conclusion</h2>
                <p className="text-muted-foreground leading-relaxed">{post.content.conclusion}</p>
              </section>
            </div>

            {/* Share Section */}
            <div className="border-t border-muted pt-8 mb-12">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Share this article</h3>
                  <p className="text-sm text-muted-foreground">Help others discover this valuable content</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Bookmark className="h-4 w-4" />
                    Bookmark
                  </Button>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <section>
              <h3 className="text-2xl font-bold mb-8 text-foreground">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.values(blogPosts)
                  .filter((relatedPost) => relatedPost.id !== post.id && relatedPost.category === post.category)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Card key={relatedPost.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-6">
                        <span className="text-xs font-medium text-primary">{relatedPost.category}</span>
                        <h3 className="text-lg font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        <Link href={`/blog/${relatedPost.id}`}>
                          <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="mt-16 py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Healthcare Organization?</h2>
                <p className="text-xl mb-8 text-primary-foreground/90">
                  Schedule a consultation to discuss your healthcare strategy needs.
                </p>
                <Link href="https://calendar.app.google/VWSK6szrzCfvSMn1A" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
