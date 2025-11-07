"use client"
import { useState, useRef } from "react"
import { Github, ExternalLink, Play, Pause } from "lucide-react"

// Import video assets
import aiVideo from "../../assets/projects/ai.mp4"
import etexVideo from "../../assets/projects/etex.mp4"
import healthcareVideo from "../../assets/projects/healthcare.mp4"
import knowledgeFirstCareerVideo from "../../assets/projects/knowledge first career.mp4"
import knowledgeFirstVideo from "../../assets/projects/knowledgefirst.mp4"
import nutritrackVideo from "../../assets/projects/nutritrack.mp4"
import refocusVideo from "../../assets/projects/refocus.mp4"
import richfamclonVideo from "../../assets/projects/richfamclon.mp4"

// Import image assets
import financeImage from "../../assets/projects/finance.png"
import nextportImage from "../../assets/projects/nextport.png"

interface Project {
  id: number
  title: string
  description: string
  video?: string
  image?: string
  languages: string[]
  liveDemo: string
  gitCode: string
  category: string
}

const ProjectsSection = () => {
  const [playingVideos, setPlayingVideos] = useState<{ [key: number]: boolean }>({})
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({})

  const projects: Project[] = [
    {
      id: 1,
      title: "AI Agent Recruiter System",
      description:
        "An intelligent recruitment platform powered by AI agents that streamline candidate matching, automate screening, and enhance hiring decisions with advanced machine learning algorithms.",
      video: aiVideo,
      languages: ["React", "AI Agents", "NLP", "Python", "TypeScript"],
      liveDemo: "https://example.com",
      gitCode: "https://github.com/example/ai-recruiter",
      category: "AI/ML",
    },
    {
      id: 2,
      title: "Finance Manager – Budget Control System",
      description:
        "A smart budgeting app designed to help students and individuals manage expenses, track income, and set financial goals with real-time insights and analytics.",
      image: financeImage,
      languages: ["React", "TypeScript", "Redux", "Firebase", "Chart.js"],
      liveDemo: "https://example.com",
      gitCode: "https://github.com/example/finance-manager",
      category: "Finance",
    },
    {
      id: 3,
      title: "Next.js Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js showcasing projects, skills, and contact information with smooth animations and interactions.",
      image: nextportImage,
      languages: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      liveDemo: "https://example.com",
      gitCode: "https://github.com/example/portfolio",
      category: "Web Development",
    },
    {
      id: 4,
      title: "Smart Nutrition Guide",
      description:
        "A comprehensive web application that helps users track daily calorie intake, meals, and fitness goals with personalized recommendations and meal planning.",
      video: nutritrackVideo,
      languages: ["React", "Node.js", "MongoDB", "Chart.js", "API Integration"],
      liveDemo: "https://example.com",
      gitCode: "https://github.com/example/nutrition-guide",
      category: "Health & Fitness",
    },
    {
      id: 5,
      title: "Healthcare Management System",
      description:
        "An advanced healthcare management platform for hospitals and clinics to manage patient records, appointments, and medical history with secure data handling.",
      video: healthcareVideo,
      languages: ["React", "Node.js", "PostgreSQL", "Express", "JWT"],
      liveDemo: "https://example.com",
      gitCode: "https://github.com/example/healthcare",
      category: "Healthcare",
    },
    {
      id: 6,
      title: "Knowledge First Career Platform",
      description:
        "A career development platform that connects job seekers with opportunities, providing career guidance, skill assessments, and personalized learning paths.",
      video: knowledgeFirstCareerVideo,
      languages: ["React", "TypeScript", "Firebase", "Stripe", "AI Integration"],
      liveDemo: "https://example.com",
      gitCode: "https://github.com/example/knowledge-first",
      category: "Education",
    },
    {
      id: 7,
      title: "Knowledge First Learning Platform",
      description:
        "An innovative e-learning platform offering interactive courses, real-time collaboration, and AI-powered personalized learning experiences for students worldwide.",
      video: knowledgeFirstVideo,
      languages: ["Next.js", "React", "MongoDB", "Socket.io", "AI/ML"],
      liveDemo: "https://example.com",
      gitCode: "https://github.com/example/knowledge-first-learning",
      category: "Education",
    },
    {
      id: 8,
      title: "Refocus Design System",
      description:
        "A comprehensive design system and UI component library built for modern web applications with accessibility, theming, and responsive design at its core.",
      video: refocusVideo,
      languages: ["React", "TypeScript", "Storybook", "Tailwind CSS", "Design Systems"],
      liveDemo: "https://example.com",
      gitCode: "https://github.com/example/refocus",
      category: "Design System",
    },
    {
      id: 9,
      title: "ETex Business Management",
      description:
        "A complete business management solution for enterprises, featuring inventory management, sales tracking, customer relations, and comprehensive reporting tools.",
      video: etexVideo,
      languages: ["React", "Node.js", "PostgreSQL", "Express", "Odoo"],
      liveDemo: "https://example.com",
      gitCode: "https://github.com/example/etex",
      category: "Business",
    },
    {
      id: 10,
      title: "RichFam Clone Application",
      description:
        "A feature-rich social networking application inspired by modern platforms, with real-time messaging, content sharing, and community features.",
      video: richfamclonVideo,
      languages: ["React", "Node.js", "MongoDB", "Socket.io", "AWS"],
      liveDemo: "https://example.com",
      gitCode: "https://github.com/example/richfam-clone",
      category: "Social Media",
    },
  ]

  const handleVideoPlay = (projectId: number) => {
    const video = videoRefs.current[projectId]
    if (video) {
      if (playingVideos[projectId]) {
        video.pause()
        setPlayingVideos((prev) => ({ ...prev, [projectId]: false }))
      } else {
        video.play()
        setPlayingVideos((prev) => ({ ...prev, [projectId]: true }))
      }
    }
  }

  const handleMouseEnter = (projectId: number) => {
    const video = videoRefs.current[projectId]
    if (video && !playingVideos[projectId]) {
      video.play().catch(() => {})
    }
  }

  const handleMouseLeave = (projectId: number) => {
    const video = videoRefs.current[projectId]
    if (video) {
      video.pause()
      video.currentTime = 0
      setPlayingVideos((prev) => ({ ...prev, [projectId]: false }))
    }
  }

  return (
    <section className="relative min-h-screen bg-white px-8 py-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-16">
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">Portfolio</p>
          <div className="flex items-start gap-3 mb-4">
            <div className="w-5 h-2 bg-purple-600 rounded-full mt-2 shrink-0"></div>
            <h1 className="text-4xl lg:text-5xl font-serif leading-tight text-black">
              Featured <span className="text-purple-600">Projects</span>
            </h1>
          </div>
          <p className="text-gray-600 font-serif text-lg max-w-2xl mt-6">
            A collection of innovative projects showcasing my expertise in UI/UX design, full-stack development, and Odoo implementation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-2xl"
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={() => handleMouseLeave(project.id)}
            >
              {/* Media Container */}
              <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
                {project.video ? (
                  <>
                    <video
                      ref={(el) => {
                        videoRefs.current[project.id] = el
                      }}
                      src={project.video}
                      className="w-full h-full object-cover"
                      loop
                      muted
                      playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <button
                      onClick={() => handleVideoPlay(project.id)}
                      className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                    >
                      {playingVideos[project.id] ? (
                        <Pause className="w-5 h-5 text-black group-hover:text-white" />
                      ) : (
                        <Play className="w-5 h-5 text-black group-hover:text-white ml-1" />
                      )}
                    </button>
                  </>
                ) : (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-600/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-black mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 font-serif leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.languages.slice(0, 3).map((lang, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium border border-gray-200"
                    >
                      {lang}
                    </span>
                  ))}
                  {project.languages.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium border border-gray-200">
                      +{project.languages.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 bg-black text-white text-sm font-semibold rounded-lg hover:bg-purple-600 transition-colors duration-300 text-center flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.gitCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-white text-black text-sm font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 border border-gray-300 flex items-center justify-center"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 border-2 border-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
