"use client"

import { useState, useRef, useEffect } from "react"

import backgroundImage from "../../assets/bakground.png"
import image1 from "../../assets/image.png"
import image2 from "../../assets/image1.png"
import image3 from "../../assets/profile.jpg"

export default function InfiniteCarousel() {
  const [isPaused, setIsPaused] = useState(false)

  
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const scrollPositionRef = useRef<number>(0)

  const images = [image1, image2, image3]
  const duplicatedImages = [...images, ...images]

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      
      const container = scrollContainerRef.current
      if (container) {
        scrollPositionRef.current += 2
        container.scrollLeft = scrollPositionRef.current

        const scrollWidth = container.scrollWidth
        const clientWidth = container.clientWidth
        const halfWidth = (scrollWidth - clientWidth) / 2

        if (scrollPositionRef.current >= halfWidth) {
          scrollPositionRef.current = 0
          container.scrollLeft = 0
        }
      }
    }, 30)

    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Carousel Container */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="w-full max-w-2xl sm:max-w-4xl lg:max-w-6xl overflow-hidden rounded-lg shadow-2xl"
        >
          <div className="flex gap-3 sm:gap-4">
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-40 sm:w-64 sm:h-48 lg:w-80 lg:h-64 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Design ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <button className="mt-8 sm:mt-12 px-6 sm:px-8 py-2 sm:py-3 bg-black text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors duration-300 shadow-lg text-sm sm:text-base">
          View All Designs
        </button>
      </div>

      {/* Gradient Shadows */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 sm:w-32 h-64 sm:h-80 bg-gradient-to-r from-black/20 to-transparent pointer-events-none rounded-lg"></div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 sm:w-32 h-64 sm:h-80 bg-gradient-to-l from-black/20 to-transparent pointer-events-none rounded-lg"></div>
    </div>
  )
}
