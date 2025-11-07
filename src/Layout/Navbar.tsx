"use client"

import { useState, useEffect } from "react"
import { Twitter, Linkedin, Github } from "lucide-react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-200" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left Navigation */}
        <div className="flex gap-8">
          <a href="#home" className="text-gray-900 font-medium hover:text-purple-600 transition">
            Home
          </a>
          <a href="#certification" className="text-gray-900 font-medium hover:text-purple-600 transition">
            Certification
          </a>
          <a href="#design-projects" className="text-gray-900 font-medium hover:text-purple-600 transition">
            Design Projects
          </a>
          <a href="#projects" className="text-gray-900 font-medium hover:text-purple-600 transition">
            Projects
          </a>
        </div>

        {/* Right Social Media */}
        <div className="flex gap-6">
          <a href="#" className="text-gray-900 hover:text-purple-600 transition" aria-label="Twitter">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-900 hover:text-purple-600 transition" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-900 hover:text-purple-600 transition" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <div className="absolute top-8 right-8 z-20">
        <a
          href="#contact"
          className="inline-block text-gray-900 font-medium text-lg border-b-2 border-purple-600 pb-2 hover:text-purple-600 transition"
        >
          Get in touch
        </a>
      </div>
        </div>
        
      </div>
    </nav>
  )
}
