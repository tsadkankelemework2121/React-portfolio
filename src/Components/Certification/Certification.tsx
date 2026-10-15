"use client"

import { useState, useEffect } from "react"
import { X, Calendar, Award, ExternalLink } from "lucide-react"

// Import certification images from assets
import AIalison from "../../assets/certifications/AIalison.png"
import Cursor from "../../assets/certifications/Cursor.png"
import digitalcertificate from "../../assets/certifications/digitalcertificate.jpg"
import freeCodeCamp from "../../assets/certifications/freeCodeCamp-certificate.png"
import gighackathon from "../../assets/certifications/gighackathon.png"
import macademy from "../../assets/certifications/macademy.png"
import reactalison from "../../assets/certifications/reactalison.png"
import shecodeshackathon from "../../assets/certifications/shecodeshackathon.jpg"
import cert10 from "../../assets/certifications/helder.png"
import mlcer from "../../assets/certifications/mlcer.png"

interface Certification {
  id: number
  title: string
  from: string
  description: string
  image: string
  date: string
}

const Certification = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      title: "Helder Technologies Paid Intern: UI/UX Designer & Front End Developer",
      from: "Helder Technologies",
      description:
        "Contributed to production client applications, designed interactive user journeys, wireframes, and high-fidelity prototypes in Figma, and implemented responsive frontend interfaces with modern React and Tailwind CSS.",     
      image: cert10,
      date: "May 2025",
    },
    {
      id: 2,
      title: "Gig Hackathon Winner: Certification Of Achievement",
      from: "Gig Hackathon",
      description:
        "1st 🏆 Place Holder as a team for Gig Hackathon 2025. Awarded for outstanding performance and innovation in the Gig Hackathon competition, showcasing problem-solving and technical skills.",
      image: gighackathon,
      date: "May 2025",
    },
    {
      id: 3,
      title: "SheCodes Hackathon: Certification Of Achievement",
      from: "SheCodes",
      description:
        "1st 🏆 place as a team at the She Codes Hackathon. Recognition for participation and achievement in SheCodes Hackathon, promoting women in technology and coding excellence.",
      image: shecodeshackathon,
      date: "March 2025",
    },
    {
      id: 4,
      title: "Introduction to Artificial Intelligence (AI)",
      from: "IBM | Hosted on Alison | CPD Certified",
      description:
        "I successfully completed the 'Introduction to Artificial Intelligence (AI)' course, published by IBM Corporation and delivered through the Alison learning platform. This CPD-certified course explores AI fundamentals, machine learning principles, generative AI applications, NLP, and deep learning.",     
      image: AIalison,
      date: "May 2025",
    },
    {
      id: 5,
      title: "Cursor Certification",
      from: "Cursor",
      description: "Professional certification demonstrating proficiency in Cursor IDE, prompt engineering, and advanced AI-assisted coding practices.",
      image: Cursor,
      date: "February 2024",
    },
    {
      id: 6,
      title: "Digital Literacy Training",
      from: "Kefta",
      description: "A program designed to equip individuals with essential skills to confidently use digital tools, technologies, online communication, and digital safety for work and education.",
      image: digitalcertificate,
      date: "August 2024",
    },
    {
      id: 7,
      title: "Responsive Web Design Certification",
      from: "freeCodeCamp",
      description:
        "FreeCodeCamp's Responsive Web Design certification validating core front-end skills, semantic HTML5, modern CSS3 layouts (Flexbox, CSS Grid), responsive queries, and accessible design patterns.",
      image: freeCodeCamp,
      date: "May 2025",
    },
    {
      id: 8,
      title: "Gig-101 Business, Legal and Finance",
      from: "Mesrat Ethiopia",
      description:
        "Comprehensive certification program covering essential legal principles, business operations, contract compliance, strategic planning, budgeting, and financial analysis.",
      image: macademy,
      date: "November 2024",
    },
    {
      id: 9,
      title: "React JavaScript – Fundamentals to Coding",
      from: "Digital Partner | Hosted on Alison | CPD Certified",
      description:
        "CPD-certified course covering modern JavaScript, React fundamentals, component architecture, hooks (useState, useEffect, custom hooks), and single-page application development.",
      image: reactalison,
      date: "January 2025",
    },
    {
      id: 10,
      title: "ML Summer School 2026",
      from: "Cohere Labs",
      description:
        "Honored participation in Cohere Labs Machine Learning Summer School, engaging in advanced machine learning, NLP transformers, and collaborative AI research.",
      image: mlcer,
      date: "August 2026",
    },
  ]

  const [clickedId, setClickedId] = useState<number | null>(null)

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setClickedId(null)
    }
    if (clickedId !== null) {
      window.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "auto"
    }
  }, [clickedId])

  const selectedCert = certifications.find((c) => c.id === clickedId)

  return (
    <section className="min-h-screen bg-white pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-1 bg-purple-600 rounded-full" />
            <span className="text-xs uppercase tracking-widest text-purple-600 font-semibold">Achievements</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-black mb-4">
            Licenses &amp; Certifications
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            A comprehensive record of my technical certifications, hackathon awards, and recognized coursework in software engineering and design.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 cursor-pointer flex flex-col hover:-translate-y-1"
              onClick={() => setClickedId(cert.id)}
            >
              {/* Image Preview Container */}
              <div className="relative w-full h-48 sm:h-52 bg-gray-900 overflow-hidden">
                <img
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                <span className="absolute top-3 right-3 p-1.5 rounded-full bg-white/90 text-gray-800 shadow opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100">
                    <Award className="w-3 h-3" />
                    {cert.from}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {cert.title}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                  {cert.description}
                </p>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-purple-600 group-hover:translate-x-1 transition-transform">
                  <span>View Certificate Details</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog for Certificate Details */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 z-50 animate-in fade-in duration-200"
          onClick={() => setClickedId(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto relative shadow-2xl flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar with Close Button */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-gray-100 flex items-center justify-between z-20">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
                Certificate Details
              </span>
              <button
                onClick={() => setClickedId(null)}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 md:p-8 space-y-6">
              {/* Full Certificate Image */}
              <div className="w-full rounded-xl overflow-hidden bg-gray-900 border border-gray-200 shadow-inner flex items-center justify-center p-2 sm:p-4">
                <img
                  src={selectedCert.image || "/placeholder.svg"}
                  alt={selectedCert.title}
                  className="max-h-[60vh] w-auto max-w-full object-contain rounded-lg"
                />
              </div>

              {/* Title & Metadata */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                    {selectedCert.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full shrink-0 w-fit">
                    <Calendar className="w-4 h-4 text-purple-600" />
                    {selectedCert.date}
                  </span>
                </div>

                <p className="text-purple-600 font-semibold text-base sm:text-lg mb-4 flex items-center gap-1.5">
                  <Award className="w-5 h-5" />
                  {selectedCert.from}
                </p>

                <div className="bg-gray-50 rounded-xl p-4 sm:p-5 border border-gray-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Description &amp; Overview</h4>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {selectedCert.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setClickedId(null)}
                className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-xl hover:bg-purple-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Certification
