"use client"

import { useState, useEffect } from "react"

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

  // Array of certification images
  const certifications = [cert1, cert2, cert3, cert4, cert5, cert6, cert7, cert8, cert9 ,cert10]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === certifications.length - 1 ? 0 : prev + 1))
    }, 3000)
    return () => clearInterval(interval)
  }, [certifications.length])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? certifications.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === certifications.length - 1 ? 0 : prev + 1))
  }

  // Get 5 images to display (2 before, current, 2 after)
  const getVisibleImages = () => {
    const visible = []
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + certifications.length) % certifications.length
      visible.push({ src: certifications[index], position: i })
    }
    return visible
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white py-16 px-4">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-16">Certification</h2>

      <div className="relative w-full max-w-7xl h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center mb-12">
        <div className="relative w-full h-full" style={{ perspective: "2000px" }}>
          {getVisibleImages().map((image, idx) => {
            const { position } = image

            // Calculate transforms based on position
            let transform = ""
            let zIndex = 0
            let opacity = 1
            let scale = 1

            if (position === 0) {
              transform = "translateX(0) translateZ(0) rotateY(0deg)"
              zIndex = 50
              scale = 1
              opacity = 1
            } else if (position === -1) {
              // Left 1
              transform = "translateX(-65%) translateZ(-250px) rotateY(25deg)"
              zIndex = 40
              scale = 0.65
              opacity = 0.8
            } else if (position === 1) {
              // Right 1
              transform = "translateX(65%) translateZ(-250px) rotateY(-25deg)"
              zIndex = 40
              scale = 0.65
              opacity = 0.8
            } else if (position === -2) {
              // Left 2
              transform = "translateX(-110%) translateZ(-400px) rotateY(35deg)"
              zIndex = 30
              scale = 0.5
              opacity = 0.6
            } else if (position === 2) {
              // Right 2
              transform = "translateX(110%) translateZ(-400px) rotateY(-35deg)"
              zIndex = 30
              scale = 0.5
              opacity = 0.6
            }

            return (
              <div
                key={idx}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out"
                style={{
                  transform,
                  zIndex,
                  opacity,
                  width: `${700 * scale}px`,
                  height: `${500 * scale}px`,
                }}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={`Certification ${idx + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-2xl"
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* See More Button */}
      <button className="px-8 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors shadow-lg">
        See More
      </button>
    </section>
  )
}

export default CertificationSection
