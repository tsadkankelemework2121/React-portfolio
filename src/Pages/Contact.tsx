"use client"

import { useState } from "react"
import type { FormEvent } from "react"
import { Linkedin, Github, Mail, Phone } from "lucide-react"

function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formDataObj = new FormData(form)

    try {
      const response = await fetch("https://formsubmit.co/ajax/tsadkankelemeworktw@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formDataObj.get("name"),
          email: formDataObj.get("email"),
          message: formDataObj.get("message"),
          _captcha: "false",
          _template: "box",
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section className="min-h-screen bg-white px-4 py-16 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you. Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            {isSubmitted ? (
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 md:p-12 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Message Sent!
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-black text-white font-serif text-base rounded-lg hover:bg-purple-600 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg shadow-lg p-6 md:p-8"
              >
              {/* Honeypot field - hidden from users but visible to bots */}
              <input
                type="text"
                name="_honey"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Disable captcha */}
              <input type="hidden" name="_captcha" value="false" />

              {/* Name Field */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-black text-white font-serif text-base rounded-lg hover:bg-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
            )}
          </div>

          {/* Contact Information Sidebar */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 h-full">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">Contact Information</h2>
              
              {/* Email */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-6 h-6 text-purple-600" />
                  <h3 className="font-semibold text-gray-900 text-lg">Email</h3>
                </div>
                <a
                  href="mailto:tsadkankelemeworktw@gmail.com"
                  className="text-gray-600 hover:text-purple-600 transition-colors text-base"
                >
                  tsadkankelemeworktw@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-6 h-6 text-purple-600" />
                  <h3 className="font-semibold text-gray-900 text-lg">Phone</h3>
                </div>
                <a
                  href="tel:+251952615114"
                  className="text-gray-600 hover:text-purple-600 transition-colors text-base"
                >
                  +251952615114
                </a>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">Connect with me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/tsadkan-kelemework-11aa30345/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors text-gray-700"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/tsadkankelemework2121"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors text-gray-700"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage

