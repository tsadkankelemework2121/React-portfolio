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
  date: string
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
      date: "March 2024",
    },
    {
      id: 2,
      title: "Cursor Certification",
      from: "Cursor",
      description: "Professional certification demonstrating proficiency in Cursor IDE and advanced coding practices.",
      image: Cursor,
      date: "February 2024",
    },
    {
      id: 3,
      title: "Digital Certificate",
      from: "Digital Academy",
      description: "Recognition of digital skills and competencies in modern technology and digital transformation.",
      image: digitalcertificate,
      date: "January 2024",
    },
    {
      id: 4,
      title: "Full Stack Development",
      from: "freeCodeCamp",
      description:
        "Comprehensive certification covering front-end and back-end development, databases, and full-stack web development practices.",
      image: freeCodeCamp,
      date: "December 2023",
    },
    {
      id: 5,
      title: "Gig Hackathon Winner",
      from: "Gig Hackathon",
      description:
        "Awarded for outstanding performance and innovation in the Gig Hackathon competition, showcasing problem-solving and technical skills.",
      image: gighackathon,
      date: "November 2023",
    },
    {
      id: 6,
      title: "High School Diploma",
      from: "High School",
      description: "Academic achievement certificate representing completion of high school education with excellence.",
      image: highschooldiploma,
      date: "June 2020",
    },
    {
      id: 7,
      title: "M Academy Certification",
      from: "M Academy",
      description:
        "Professional certification from M Academy demonstrating expertise in specialized technical skills and knowledge.",
      image: macademy,
      date: "October 2023",
    },
    {
      id: 8,
      title: "React Development",
      from: "Alison",
      description:
        "Advanced React.js certification covering component architecture, hooks, state management, and modern React development patterns.",
      image: reactalison,
      date: "September 2023",
    },
    {
      id: 9,
      title: "SheCodes Hackathon",
      from: "SheCodes",
      description:
        "Recognition for participation and achievement in SheCodes Hackathon, promoting women in technology and coding excellence.",
      image: shecodeshackathon,
      date: "August 2023",
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
              className="relative rounded-lg shadow-lg overflow-hidden transition-all duration-300 cursor-pointer"
              onClick={() => setClickedId(cert.id)}
              onMouseEnter={() => setHoveredId(cert.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative w-full h-48 bg-gray-900 overflow-hidden">
                <img src={cert.image || "/placeholder.svg"} alt={cert.title} className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block text-xs font-semibold text-black border border-black px-3 py-1 rounded-full mb-3">
                  {cert.from}
                </span>

                <span className="inline-block text-xs font-semibold text-black border border-black px-3 py-1 rounded-full ml-2">
                  {cert.date}
                </span>

                <h3 className="text-xl font-bold text-black mb-3">{cert.title}</h3>

                <p className="text-black text-sm leading-relaxed">{cert.description}</p>
              </div>
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
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setClickedId(null)}
              className="absolute top-4 left-4 text-2xl text-gray-600 hover:text-gray-900 transition-colors z-10 w-8 h-8 flex items-center justify-center"
              aria-label="Close"
            >
              ✕
            </button>

            {(() => {
              const cert = certifications.find((c) => c.id === clickedId)
              return cert ? (
                <div className="p-8">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    className="w-full h-auto rounded-lg mb-6"
                  />
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-3xl font-bold text-gray-900">{cert.title}</h3>
                    <span className="text-lg font-semibold text-gray-900 ml-4">{cert.date}</span>
                  </div>
                  <p className="text-purple-600 font-semibold mb-4 text-lg">{cert.from}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{cert.description}</p>
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
