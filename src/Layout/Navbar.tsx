"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Linkedin, Github } from "lucide-react"

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
      <div className="max-w-7xl mx-auto py-4 flex items-center justify-between">
        {/* Left - Purple Logo + Navigation Items */}
        <div className="flex items-center gap-20">
          <Link to="/" className="text-2xl font-bold text-purple-600 hover:text-purple-700 transition">
            Tsadkan
          </Link>
          <div className="flex items-center gap-8">
            <Link to="/" className="text-gray-900 hover:text-purple-600 transition">
              Home
            </Link>
            <Link to="/projects" className="text-gray-900 hover:text-purple-600 transition">
              Projects
            </Link>
            <Link to="/certification" className="text-gray-900 hover:text-purple-600 transition">
              Certification
            </Link>
          </div>
        </div>

        {/* Right - Social Media Icons + Get in touch */}
        <div className="flex items-center gap-8">
          {/* <a href="tsadkankelemeworktw@gmail.com" className="text-gray-900 hover:text-purple-600 transition" aria-label="Twitter">
            <Mail className="w-5 h-5" />
          </a> */}
          <a href="https://www.linkedin.com/in/tsadkan-kelemework-11aa30345/" className="text-gray-900 hover:text-purple-600 transition" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com/tsadkankelemework2121" className="text-gray-900 hover:text-purple-600 transition" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="text-gray-900 font-medium text-lg border-b-2 border-purple-600 pb-2 hover:text-purple-600 transition whitespace-nowrap"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  )
}
