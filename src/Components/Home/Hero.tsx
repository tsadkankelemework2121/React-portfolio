"use client"

import { useState } from "react"
import heroimage from '../../assets/image1.png'
export default function Hero() {
  // const heroImagePath = "/images/hero-image.jpg" // Update this path with your image file
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative w-full h-screen bg-white flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroimage}
          alt="Hero background"
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-6">
        <a
          href="#contact"
          className="inline-block text-gray-900 font-medium text-lg border-b-2 border-purple-600 pb-2 hover:text-purple-600 transition"
        >
          Get in touch
        </a>
        <h1 className="text-6xl md:text-6xl font-medium text-gray-700 mb-4">“Bringing creativity, code, and Odoo together to build what matters.”</h1>
        <p className="text-xl md:text-5xl text-gray-700 font-medium mb-12">UI/UX Designer | Full Stack Developer and Odoo Implementer</p>

        
      </div>
    </section>
  )
}
