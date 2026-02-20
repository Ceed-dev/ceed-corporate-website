"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = React.useState<Record<string, string>>({})

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    if (!formState.name.trim()) {
      newErrors.name = "Name is required"
    }
    if (!formState.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formState.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formState.message.trim()) {
      newErrors.message = "Message is required"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    alert("Thank you for your message! We'll be in touch soon.")
    setFormState({ name: "", email: "", message: "" })
  }

  return (
    <div className="bg-premium min-h-screen relative">
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />

      {/* Header */}
      <section className="relative z-10 pt-12 lg:pt-20 pb-12 lg:pb-16">
        <div className="container-editorial">
          <h1 className="text-headline text-foreground max-w-xl text-balance">
            Contact
          </h1>
          <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
            Have a question or want to get in touch? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="relative z-10 pb-24 lg:pb-32 border-t border-border-hairline">
        <div className="container-editorial pt-12 lg:pt-16">
          <div className="max-w-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs text-muted-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formState.name}
                  onChange={(e) => {
                    setFormState({ ...formState, name: e.target.value })
                    if (errors.name) setErrors({ ...errors, name: "" })
                  }}
                  className={`text-base min-h-[44px] border-border-hairline focus:border-foreground/30 bg-transparent ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-500">{errors.name}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs text-muted-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formState.email}
                  onChange={(e) => {
                    setFormState({ ...formState, email: e.target.value })
                    if (errors.email) setErrors({ ...errors, email: "" })
                  }}
                  className={`text-base min-h-[44px] border-border-hairline focus:border-foreground/30 bg-transparent ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs text-muted-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="How can we help?"
                  value={formState.message}
                  onChange={(e) => {
                    setFormState({ ...formState, message: e.target.value })
                    if (errors.message) setErrors({ ...errors, message: "" })
                  }}
                  className={`min-h-[140px] text-base border-border-hairline focus:border-foreground/30 bg-transparent ${
                    errors.message ? "border-red-500" : ""
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-red-500">{errors.message}</p>
                )}
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto magnetic-hover min-h-[44px]"
              >
                Send message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
