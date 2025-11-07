"use client"

import { useState } from "react"
import heroimage from "../../assets/image1.png"
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
        <h1
          className="text-6xl md:text-4xl font-medium text-gray-900 mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          "Bringing creativity and code together to build what matters."
        </h1>
        <p className="text-xl md:text-3xl text-gray-700 font-medium mb-12">
        UI/UX Designer & Front-End Developer | Aspiring Full-Stack Developer
        </p>
      </div>
    </section>
  )
}
