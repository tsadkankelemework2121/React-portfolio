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
import cert10 from "../../assets/certifications/helder.png"

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
      title: "Helder Technologies Paid Intern:UI//UX Designer Front End Developer",
      from: "Helder Technologies",
      description:
        "Many Real World Projects.",     
         image: cert10,
      date: "May 2025",
    },
    {
      id: 2,
      title: "Gig Hackathon Winner:Certification Of Achievement",
      from: "Gig Hackathon",
      description:
        "1st 🏆 Place Holder as a team for Gig Hackathon 2025.Awarded for outstanding performance and innovation in the Gig Hackathon competition, showcasing problem-solving and technical skills.",
      image: gighackathon,
      date: "May 2025",
    },
    {
      id: 3,
      title: "SheCodes Hackathon :Certification Of Achievement",
      from: "SheCodes",
      description:
        "1st 🏆 place as a team at the She Codes Hackathon.Recognition for participation and achievement in SheCodes Hackathon, promoting women in technology and coding excellence.",
      image: shecodeshackathon,
      date: "March 2025",
    },
    {
      id: 4,
      title: "Introduction to Artificial Intelegence (AI)",
      from: "IBM | Hosted on Alison | CPD Certified",
      description:
        "I successfully completed the 'Introduction to Artificial Intelligence (AI)' course, published by IBM Corporation and delivered through the Alison learning platform. This CPD-certified course, aligned with industry standards, explores AI fundamentals, including the principles of machine learning, generative AI applications, natural language processing (NLP), and deep learning's role in industry breakthroughs. I completed all lessons and exercises but could not afford the paid certificate. The displayed certificate is a sample, and I’ve included a screenshot of the official IBM publisher details for verification and transparency.",     
         image: AIalison,
      date: "May 2025",
    },
    {
      id: 5,
      title: "Cursor Certification",
      from: "Cursor",
      description: "Professional certification demonstrating proficiency in Cursor IDE and advanced coding practices.",
      image: Cursor,
      date: "February 2024",
    },
    {
      id: 6,
      title: "Digital Litracy Training",
      from: "Kefta",
      description: "A program designed to equip individuals with the essential skills to confidently use digital tools, technologies, and the internet. It covers basic computer operations, online communication, internet safety, and the effective use of digital resources for work, education, and daily life. This training empowers participants to navigate the digital world efficiently and responsibly.",
      image: digitalcertificate,
      date: "August 2024",
    },
    {
      id: 7,
      title: "Responsive Web Design Certification",
      from: "freeCodeCamp",
      description:
        "Advanced React concepts including hoFreeCodeCamp’s Responsive Web Design certification is a great way to validate core front-end skills—even for experienced developers. I recently completed their rigorous project-based curriculum to test my proficiency, earning the certification in a short timeframe. The hands-on challenges (like building accessible, mobile-first layouts) align with real-world standards, making it a solid benchmark. While the credential is new, my expertise in responsive design isn’t.",
      image: freeCodeCamp,
      date: "May 2025",
    },
   
    {
      id: 8,
      title: "Gig-101 Business, Legal and Finance",
      from: "Mesrat Ethiopia",
      description:
        "This comprehensive certification program equips participants with essential knowledge in legal principles, business operations, and financial management. It covers key areas such as contracts and compliance, strategic planning, leadership, budgeting, and financial analysis. Ideal for aspiring professionals, the training enhances decision-making, legal awareness, and financial literacy, preparing individuals for success in a wide range of organizational and entrepreneurial roles.",
      image: macademy,
      date: "November 2024",
    },
    {
      id: 9,
      title: "React JavaScript",
      from: "Digital Partner | Hosted on Alison | CPD Certified",
      description:
        "I successfully completed the 'React JavaScript – Fundamentals to Coding & New Beginnings' course, published by Digital Partner and delivered via the Alison learning platform. This CPD-certified course, aligned with industry standards, covers modern JavaScript, React fundamentals, component structures, hooks (e.g., useState, useEffect), and single-page app concepts. I completed all lessons and exercises but could not afford the paid certificate. The displayed certificate is a sample, and I’ve included a screenshot of the official publisher details for verification and transparency.",
      image: reactalison,
      date: "January 2025",
    },
    {
      id: 10,
      title: "High School Diploma",
      from: "Blessed Gebre Michael Catholic School",
      description: "Academic achievement certificate representing completion of high school education with excellence.",
      image: highschooldiploma,
      date: "September 2022",
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
