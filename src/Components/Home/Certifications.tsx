"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

// Import certification images from assets
import cert1 from "../../assets/certifications/AIalison.png"
import cert2 from "../../assets/certifications/digitalcertificate.jpg"
import cert3 from "../../assets/certifications/freeCodeCamp-certificate.png"
import cert4 from "../../assets/certifications/gighackathon.png"
import cert5 from "../../assets/certifications/highschooldiploma.jpg"
import cert6 from "../../assets/certifications/macademy.png"
import cert7 from "../../assets/certifications/reactalison.png"
import cert8 from "../../assets/certifications/shecodeshackathon.jpg"
import cert9 from "../../assets/certifications/Cursor.png"
import cert10 from "../../assets/certifications/helder.png"

const CertificationSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Array of certification images
  const certifications = [cert1, cert2, cert3, cert4, cert5, cert6, cert7, cert8, cert9, cert10]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === certifications.length - 1 ? 0 : prev + 1))
    }, 3500)
    return () => clearInterval(interval)
  }, [certifications.length])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? certifications.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === certifications.length - 1 ? 0 : prev + 1))
  }

  // Get images to display
  const getVisibleImages = () => {
    const visible = []
    // On mobile, show current and 1 neighbor; on desktop show 2 neighbors
    const range = isMobile ? 1 : 2
    for (let i = -range; i <= range; i++) {
      const index = (currentIndex + i + certifications.length) % certifications.length
      visible.push({ src: certifications[index], position: i, index })
    }
    return visible
  }

  return (
    <section className="relative min-h-[600px] flex flex-col items-center justify-center bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-gray-100">
      {/* Title */}
      <div className="text-center max-w-3xl mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-8 h-1 bg-purple-600 rounded-full" />
          <span className="text-xs uppercase tracking-widest text-purple-600 font-semibold">Credentials</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-black mb-3">
          Honors &amp; Certifications
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
          Recognized achievements, hackathon championships, and professional development milestones.
        </p>
      </div>

      <div className="relative w-full max-w-5xl h-[280px] sm:h-[400px] md:h-[480px] flex items-center justify-center mb-8 sm:mb-12">
        <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: "1500px" }}>
          {getVisibleImages().map((image) => {
            const { position, index } = image

            let transform = ""
            let zIndex = 0
            let opacity = 1
            if (position === 0) {
              transform = "translateX(0) translateZ(0) rotateY(0deg) scale(1)"
              zIndex = 50
              opacity = 1
            } else if (position === -1) {
              const sc = isMobile ? 0.8 : 0.75
              transform = isMobile
                ? `translateX(-45%) translateZ(-150px) rotateY(15deg) scale(${sc})`
                : `translateX(-60%) translateZ(-220px) rotateY(20deg) scale(${sc})`
              zIndex = 40
              opacity = 0.75
            } else if (position === 1) {
              const sc = isMobile ? 0.8 : 0.75
              transform = isMobile
                ? `translateX(45%) translateZ(-150px) rotateY(-15deg) scale(${sc})`
                : `translateX(60%) translateZ(-220px) rotateY(-20deg) scale(${sc})`
              zIndex = 40
              opacity = 0.75
            } else if (position === -2) {
              transform = "translateX(-100%) translateZ(-350px) rotateY(30deg) scale(0.55)"
              zIndex = 30
              opacity = 0.5
            } else if (position === 2) {
              transform = "translateX(100%) translateZ(-350px) rotateY(-30deg) scale(0.55)"
              zIndex = 30
              opacity = 0.5
            }

            return (
              <div
                key={`${index}-${position}`}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out cursor-pointer"
                onClick={() => setCurrentIndex(index)}
                style={{
                  transform,
                  zIndex,
                  opacity,
                  width: isMobile ? "280px" : "min(580px, 75vw)",
                  height: isMobile ? "190px" : "min(390px, 50vw)",
                }}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={`Certification ${index + 1}`}
                    className="w-full h-full object-contain bg-gray-900"
                    loading="lazy"
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Carousel Prev/Next Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 z-50 p-2 sm:p-3 rounded-full bg-white/90 hover:bg-purple-600 hover:text-white text-gray-800 shadow-lg backdrop-blur-sm transition-all active:scale-95"
          aria-label="Previous certificate"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 z-50 p-2 sm:p-3 rounded-full bg-white/90 hover:bg-purple-600 hover:text-white text-gray-800 shadow-lg backdrop-blur-sm transition-all active:scale-95"
          aria-label="Next certificate"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center gap-2 mb-8">
        {certifications.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === idx
                ? "w-8 h-2.5 bg-purple-600"
                : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* See More Link with SPA React Router */}
      <Link
        to="/certification"
        className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-black text-white font-semibold rounded-xl hover:bg-purple-600 transition-all duration-200 shadow-lg text-sm sm:text-base hover:shadow-xl active:scale-95"
      >
        <span>View All Certifications</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </section>
  )
}

export default CertificationSection
