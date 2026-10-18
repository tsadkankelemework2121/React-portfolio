"use client"

import { useState } from "react"
import heroimage from "../../assets/image1.png"

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen bg-white flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroimage}
          alt="Hero background"
          className={`w-full h-full object-cover object-center transition-transform duration-700 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        {/* Soft readable gradient overlay */}
        <div className="absolute inset-0 bg-white/40 md:bg-white/20 backdrop-blur-[1px]" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-12 max-w-5xl mx-auto py-12">
        <h1
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-black leading-tight sm:leading-tight md:leading-tight mb-4 sm:mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          "Bringing creativity and code together to build what matters."
        </h1>

        <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-800 font-medium max-w-2xl mx-auto">
          Full-Stack Design Engineer
        </p>
      </div>
    </section>
  )
}
