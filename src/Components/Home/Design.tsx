"use client"

import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

import backgroundImage from "../../assets/bakground.png"
import image1 from "../../assets/design/Choose Doctor.png"
import image2 from "../../assets/design/Frame 1000003373.png"
import image3 from "../../assets/design/Frame 1000003374.png"
import image4 from "../../assets/design/Frame 1000003375.png"
import image5 from "../../assets/design/Frame 1000003376.png"
import image6 from "../../assets/design/Frame 1000003377.png"
import image7 from "../../assets/design/Frame 1000003379.png"
import image8 from "../../assets/design/refocus.png"

export default function InfiniteCarousel() {
  const [isPaused, setIsPaused] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const scrollPositionRef = useRef<number>(0)

  const images = [image1, image2, image3, image4, image5, image6, image7, image8]
  const duplicatedImages = [...images, ...images]

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      const container = scrollContainerRef.current
      if (container) {
        scrollPositionRef.current += 1.5
        container.scrollLeft = scrollPositionRef.current

        const scrollWidth = container.scrollWidth
        const clientWidth = container.clientWidth
        const halfWidth = (scrollWidth - clientWidth) / 2

        if (scrollPositionRef.current >= halfWidth) {
          scrollPositionRef.current = 0
          container.scrollLeft = 0
        }
      }
    }, 25)

    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <section
      className="relative w-full py-16 sm:py-24 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay to ensure design elements are clear */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />

      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-1 bg-purple-600 rounded-full" />
            <span className="text-xs uppercase tracking-widest text-purple-600 font-semibold">UI/UX Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-black mb-3">
            Design Works &amp; Wireframes
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            A glance at product UI designs, mobile app concepts, and design system components crafted with precision.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="w-full max-w-7xl overflow-x-auto no-scrollbar scroll-smooth py-4"
        >
          <div className="flex gap-4 sm:gap-6 lg:gap-8 w-max">
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="shrink-0 w-64 h-80 sm:w-80 sm:h-96 md:w-[380px] md:h-[440px] rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 bg-white shadow-xl border border-gray-100 flex items-center justify-center p-3"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Design preview ${index + 1}`}
                  className="w-full h-full object-contain rounded-xl"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call to action with SPA client routing */}
        <Link
          to="/projects"
          className="mt-8 sm:mt-12 inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-black text-white font-semibold rounded-xl hover:bg-purple-600 transition-all duration-200 shadow-lg text-sm sm:text-base hover:shadow-xl active:scale-95"
        >
          <span>View All Projects</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
