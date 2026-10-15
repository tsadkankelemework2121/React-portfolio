"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Linkedin, Github, Menu, X } from "lucide-react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change or resize
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Certification", path: "/certification" },
    { name: "Contact", path: "/contact" },
  ]

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/"
    return location.pathname.startsWith(path)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left - Brand Logo */}
          <div className="flex items-center gap-8 lg:gap-12">
            <Link
              to="/"
              className="text-2xl sm:text-3xl font-serif font-bold text-black tracking-tight hover:text-purple-600 transition-colors"
            >
              Tsadkan<span className="text-purple-600">.</span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm lg:text-base font-medium transition-colors relative py-1 ${
                    isActive(link.path)
                      ? "text-purple-600 font-semibold"
                      : "text-gray-700 hover:text-purple-600"
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 rounded-full animate-fade-in" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Right - Desktop Social Media Icons + Get in touch */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <a
              href="https://www.linkedin.com/in/tsadkan-kelemework-11aa30345/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/tsadkankelemework2121"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <Link
              to="/contact"
              className="ml-2 px-5 py-2.5 bg-black text-white text-sm font-medium rounded-xl hover:bg-purple-600 transition-all duration-200 shadow-sm hover:shadow active:scale-95"
            >
              Get in touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              to="/contact"
              className="px-3.5 py-1.5 bg-black text-white text-xs font-medium rounded-lg hover:bg-purple-600 transition-colors"
            >
              Contact
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 transition-all animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-purple-50 text-purple-700 font-semibold"
                    : "text-gray-800 hover:bg-gray-50 hover:text-purple-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Social Links */}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-around">
            <a
              href="https://www.linkedin.com/in/tsadkan-kelemework-11aa30345/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
            >
              <Linkedin className="w-4 h-4 text-purple-600" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/tsadkankelemework2121"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
            >
              <Github className="w-4 h-4 text-purple-600" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
