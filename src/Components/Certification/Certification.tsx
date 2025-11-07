"use client"

import { useState } from "react"

// Import certification images from assets
import AIalison from "../../assets/certifications/AIalison.png"
import Cursor from "../../assets/certifications/Cursor.png"
import digitalcertificate from "../../assets/certifications/digitalcertificate.jpg"
import freeCodeCamp from "../../assets/certifications/freeCodeCamp-certificate.png"
import gighackathon from "../../assets/certifications/gighackathon.png"
import highschooldiploma from "../../assets/certifications/highschooldiploma.jpg"
import macademy from "../../assets/certifications/macademy.png"
import reactalison from "../../assets/certifications/reactalison.png"
import shecodeshackathon from "../../assets/certifications/shecodeshackathon.jpg"

interface Certification {
  id: number
  title: string
  from: string
  description: string
  image: string
}

const Certification = () => {
  // Array of certifications - easily scalable for future additions
  const certifications: Certification[] = [
    {
      id: 1,
      title: "AI Fundamentals",
      from: "Alison",
      description:
        "Comprehensive course covering artificial intelligence fundamentals, machine learning basics, and AI applications in modern technology.",
      image: AIalison,
    },
    {
      id: 2,
      title: "Cursor Certification",
      from: "Cursor",
      description: "Professional certification demonstrating proficiency in Cursor IDE and advanced coding practices.",
      image: Cursor,
    },
    {
      id: 3,
      title: "Digital Certificate",
      from: "Digital Academy",
      description: "Recognition of digital skills and competencies in modern technology and digital transformation.",
      image: digitalcertificate,
    },
    {
      id: 4,
      title: "Full Stack Development",
      from: "freeCodeCamp",
      description:
        "Comprehensive certification covering front-end and back-end development, databases, and full-stack web development practices.",
      image: freeCodeCamp,
    },
    {
      id: 5,
      title: "Gig Hackathon Winner",
      from: "Gig Hackathon",
      description:
        "Awarded for outstanding performance and innovation in the Gig Hackathon competition, showcasing problem-solving and technical skills.",
      image: gighackathon,
    },
    {
      id: 6,
      title: "High School Diploma",
      from: "High School",
      description: "Academic achievement certificate representing completion of high school education with excellence.",
      image: highschooldiploma,
    },
    {
      id: 7,
      title: "M Academy Certification",
      from: "M Academy",
      description:
        "Professional certification from M Academy demonstrating expertise in specialized technical skills and knowledge.",
      image: macademy,
    },
    {
      id: 8,
      title: "React Development",
      from: "Alison",
      description:
        "Advanced React.js certification covering component architecture, hooks, state management, and modern React development patterns.",
      image: reactalison,
    },
    {
      id: 9,
      title: "SheCodes Hackathon",
      from: "SheCodes",
      description:
        "Recognition for participation and achievement in SheCodes Hackathon, promoting women in technology and coding excellence.",
      image: shecodeshackathon,
    },
  ]

  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [clickedId, setClickedId] = useState<number | null>(null)

  return (
    <section className="min-h-screen bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Title - Add margin-top to create space from navbar */}
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 mt-12 text-center">Certifications</h2>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 cursor-pointer group"
              style={{
                transform: hoveredId === cert.id ? "scale(1.05)" : "scale(1)",
                zIndex: hoveredId === cert.id ? 10 : 1,
              }}
              onMouseEnter={() => setHoveredId(cert.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setClickedId(cert.id)}
            >
              {/* Image Container */}
              <div className="relative w-full h-64 overflow-hidden bg-gray-100">
                <img
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-purple-600 font-semibold mb-3">{cert.from}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
              </div>

              {/* Hover indicator */}
              <div
                className={`absolute top-4 right-4 w-3 h-3 bg-purple-600 rounded-full transition-all duration-300 ${
                  hoveredId === cert.id ? "scale-150 opacity-100" : "opacity-50"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {clickedId && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setClickedId(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const cert = certifications.find((c) => c.id === clickedId)
              return cert ? (
                <div className="p-8">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    className="w-full h-auto rounded-lg mb-6"
                  />
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-purple-600 font-semibold mb-4 text-lg">{cert.from}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{cert.description}</p>
                  <button
                    onClick={() => setClickedId(null)}
                    className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : null
            })()}
          </div>
        </div>
      )}
    </section>
  )
}

export default Certification
