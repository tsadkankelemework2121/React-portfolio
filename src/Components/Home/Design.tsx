"use client"

import { useState, useRef, useEffect } from "react"

import backgroundImage from "../../assets/bakground.png"
import image1 from "../../assets/design/Choose Doctor.png"
import image2 from "../../assets/design/Frame 1000003373.png"
import image4 from "../../assets/design/Frame 1000003375.png"
import image5 from "../../assets/design/Frame 1000003376.png"
import image6 from "../../assets/design/Frame 1000003377.png"
import image7 from "../../assets/design/Frame 1000003379.png"
import image8 from "../../assets/design/refocus.png"
import image3 from "../../assets/design/Frame 1000003374.png"
export default function InfiniteCarousel() {
  const [isPaused, setIsPaused] = useState(false)

  
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const scrollPositionRef = useRef<number>(0)

  const images = [image1, image2, image3, image3, image4, image5, image6, image7, image8]
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
      <div className="relative h-full  w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="w-full max-w-4xl sm:max-w-5xl lg:max-w-7xl overflow-hidden rounded-lg shadow-2xl"
        >
          <div className="flex gap-4 sm:gap-6 lg:gap-8">
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="shrink-0 w-72 h-96 sm:w-96 sm:h-[500px] lg:w-[450px] lg:h-[250px] rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 bg-white shadow-lg"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Design ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <a href="/projects" className="mt-8 sm:mt-12 px-6 sm:px-8 py-2 sm:py-3 bg-black text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors duration-300 shadow-lg text-sm sm:text-base inline-block">
          View All Designs
        </a>
      </div>

      {/* Gradient Shadows */}
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 w-20 sm:w-32 h-64 sm:h-80 pointer-events-none rounded-lg"
        style={{
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.2), transparent)'
        }}
      ></div>
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-20 sm:w-32 h-64 sm:h-80 pointer-events-none rounded-lg"
        style={{
          background: 'linear-gradient(to left, rgba(0, 0, 0, 0.2), transparent)'
        }}
      ></div>
    </div>
  )
}

