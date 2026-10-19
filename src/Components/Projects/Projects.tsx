"use client"

import { useState, useRef, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Github, ExternalLink, Play, Pause, X, Code, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"

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
import bayerImage from "../../assets/bayer.png"
import beltechImage from "../../assets/beltech.jpg"
import financeImage from "../../assets/projects/finance.png"
import nextportImage from "../../assets/projects/nextport.png"
import peaImage from "../../assets/projects/pea.png"

export interface Project {
  id: number
  title: string
  description: string
  detailedDescription?: string
  features?: string[]
  video?: string
  image?: string
  languages: string[]
  liveDemo: string
  gitCode?: string
  category?: string
}

const ProjectsSection = () => {
  const { id } = useParams<{ id?: string }>()

  const [playingVideos, setPlayingVideos] = useState<{ [key: number]: boolean }>({})
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({})
  const modalVideoRef = useRef<HTMLVideoElement | null>(null)

  const projects: Project[] = [{
      id: 1,
      title: "Petroleum and Energy Authority (PEA) Management System",
      description:
        "A comprehensive web-based platform for petroleum transportation management, GPS vehicle tracking, fuel dispatch monitoring, and oil company coordination.",
      detailedDescription:
        "The Petroleum and Energy Authority (PEA) platform is a full-featured government-grade enterprise system created to oversee the downstream petroleum supply chain. It provides real-time GPS tracking for fuel tanker fleets, digital dispatch manifests, role-based dashboards for regulators and oil distribution companies, and automated compliance auditing.",
      features: [
        "Real-time GPS vehicle tracking and route verification",
        "Fuel depot scheduling and automated dispatch manifests",
        "Multi-tenant role-based access control (Admin, Depot Manager, Inspector, Transporter)",
        "Automated compliance reporting and anomaly detection",
      ],
      image: peaImage,
      languages: ["React", "TypeScript", "Tailwind CSS", "Laravel / PHP", "PostgreSQL"],
      liveDemo: "https://example.com",
      gitCode: "https://github.com/tsadkankelemework2121/Petroleum_and_Energy_Authority",
    },
    {
      id: 2,
      title: "Bayer Life Science Ethiopia — Fleet Safety & Compliance Platform",
      description:
        "Enterprise fleet safety & compliance report dashboard built for Bayer Life Science Ethiopia PLC, providing real-time speed monitoring, trip compliance, and automated PDF reporting.",
      detailedDescription:
        "Bayer Life Science Ethiopia Fleet Safety & Compliance Report is a mission-critical telematics analytics and corporate driver safety management platform. Designed for Bayer Life Science Ethiopia PLC, it monitors vehicle speed benchmarks, night driving, continuous driving events, and geofence violations across the entire corporate fleet through automated company backend API integration.",
      features: [
        "Fleet Telematics & Compliance Monitoring: Real-time visibility across 14+ vehicles tracking overspeeding, continuous driving hours, night driving, and geofence adherence.",
        "Speed Analytics & Benchmarking: Visualizes maximum recorded speeds (up to 203 km/h) against corporate threshold limits (110 km/h) with event frequency comparisons.",
        "High-Performance API Hydration: Built with React and React Query to fetch, cache, and synchronize live telematics data seamlessly from company backend APIs.",
        "Automated Compliance & PDF Reports: Provides structured data summaries, driver audit logs, and one-click PDF report exports for executive fleet management.",
      ],
      image: bayerImage,
      languages: ["React", "React Query", "REST APIs", "Tailwind CSS", "Data Analytics"],
      liveDemo: "https://bayer-03.vercel.app/",
    },
    {
      id: 3,
      title: "Beltech Solutions — Enterprise Digital Transformation Platform",
      description:
        "Backend Architecture & Modern Corporate Web Platform for ERP & Automation Solutions delivering enterprise digital transformation across Africa.",
      detailedDescription:
        "Beltech Solutions is a digital transformation platform delivering ERP, business automation, and enterprise software solutions across Africa. I led the backend development and API architecture to support client consultations, service discovery, and demo scheduling.",
      features: [
        "Backend Architecture & APIs: Designed and deployed modular RESTful endpoints with Node.js and Express to manage demo requests, consultation bookings, and user interactions.",
        "Database Modeling: Structured flexible MongoDB schemas and data pipelines for lead tracking and service inquiries with strict validation.",
        "System Integration & Performance: Integrated backend endpoints with the responsive frontend, optimizing response latency and ensuring cross-browser stability.",
      ],
      image: beltechImage,
      languages: ["Node.js", "Express", "MongoDB", "REST APIs", "JavaScript", "Tailwind CSS"],
      liveDemo: "https://blsglob.com",
      gitCode: "https://github.com/skillbridge5/BelTech_backend",
    },
    {
      id: 4,
      title: "Refocus Design System",
      description:
        "A comprehensive design system and UI component library built for modern web applications with accessibility, theming, and responsive design at its core.",
      detailedDescription:
        "Refocus Design System unifies product experiences across platforms. It offers pixel-perfect tokens, fully accessible React components, dynamic theming support, and rich Figma component parity to accelerate engineering velocity.",
      features: [
        "Accessible WCAG 2.1 AA compliant UI components",
        "Dynamic theme provider with light, dark, and brand palettes",
        "Interactive documentation and Figma token synchronization",
        "High performance zero-runtime overhead styling",
      ],
      video: refocusVideo,
      languages: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Figma"],
      liveDemo: "https://subscribe.refocusafrika.com/",
      gitCode: "https://github.com/bezawit11234/StudyAboard",
    },
    {
      id: 5,
      title: "Knowledge First Career Platform",
      description:
        "A career development platform that connects job seekers with opportunities, providing career guidance, skill assessments, and personalized learning paths.",
      detailedDescription:
        "Knowledge First Career empowers youth and professionals through AI-guided mentorship, career assessment pipelines, and resume optimization. It bridges the gap between educational credentials and industry hiring standards.",
      features: [
        "Interactive skill gap assessments and custom career pathways",
        "Curated job board with automated applicant profile matching",
        "Resume analysis and portfolio builder tools",
        "Direct recruiter messaging and interview coordination",
      ],
      video: knowledgeFirstCareerVideo,
      languages: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express"],
      liveDemo: "https://example.com",
      gitCode: "https://github.com/AshenafiHelder/knowledge-first.com",
    },
    {
      id: 6,
      title: "Knowledge First Learning Platform",
      description:
        "An innovative e-learning platform offering interactive courses, real-time collaboration, and AI-powered personalized learning experiences for students worldwide.",
      detailedDescription:
        "A scalable learning management system (LMS) designed for interactive video education, collaborative quizzes, and modular coursework. Instructors can publish multimedia curriculums while students track their mastery milestones.",
      features: [
        "Modular lesson video streaming and progress persistence",
        "Real-time interactive quizzes and certificate generation",
        "Student-instructor discussion forums and resource repository",
        "Mobile-first responsive interface for low-bandwidth networks",
      ],
      video: knowledgeFirstVideo,
      languages: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
      liveDemo: "https://example.com",
      gitCode: "https://github.com/AshenafiHelder/Knowledge-first",
    },
    {
      id: 7,
      title: "AI Agent Recruiter System",
      description:
        "An intelligent recruitment platform powered by AI agents that streamline candidate matching, automate screening, and enhance hiring decisions with machine learning.",
      detailedDescription:
        "Award-winning project utilizing specialized AI agents to analyze resumes, evaluate candidate technical competencies against job specs, and conduct automated initial screenings while mitigating hiring bias.",
      features: [
        "Multi-agent architecture for automated candidate parsing and ranking",
        "Semantic search match between resume embeddings and job descriptions",
        "Automated personalized feedback and screening summaries",
        "Interactive dashboard for recruitment workflow management",
      ],
      video: aiVideo,
      languages: ["Next.js", "AI Agents", "NLP", "Python", "TypeScript"],
      liveDemo: "https://example.com",
      gitCode: "https://github.com/tsadkankelemework2121/Airecruiter",
      category: "AI/ML",
    },
    {
      id: 8,
      title: "Smart Nutrition Guide",
      description:
        "A comprehensive web application that helps users track daily calorie intake, meals, and fitness goals with personalized recommendations and meal planning.",
      detailedDescription:
        "NutriTrack gives users granular control over their nutritional health. With instant calorie calculations, macro breakdowns (proteins, carbs, fats), and intelligent recipe recommendations, staying fit becomes effortless.",
      features: [
        "Custom calorie and macro nutrient goal calculations",
        "Extensive food database search with nutritional facts",
        "Interactive data visualizations and progress graphs",
        "Personalized meal plan generation and reminder notifications",
      ],
      video: nutritrackVideo,
      languages: ["Next.js", "Node.js", "MongoDB", "Chart.js", "Tailwind CSS"],
      liveDemo: "https://example.com",
      gitCode: "https://github.com/tsadkankelemework2121/NutiTrack",
      category: "Personal Project",
    },
    {
      id: 9,
      title: "Healthcare Management System",
      description:
        "An advanced healthcare management platform for hospitals and clinics to manage patient records, appointments, and medical history with secure data handling.",
      detailedDescription:
        "Engineered for reliability and data privacy, this system provides doctor scheduling, electronic health records (EHR), prescription management, and billing workflows for healthcare institutions.",
      features: [
        "Patient appointment scheduling with conflict prevention",
        "Digital medical history and consultation notes archive",
        "Doctor roster management and departmental allocation",
        "Secure role-based access for medical and administrative staff",
      ],
      video: healthcareVideo,
      languages: ["Java", "OOP", "MySQL", "Desktop UI / JavaFX"],
      liveDemo: "https://example.com",
      gitCode: "https://github.com/tsadkankelemework2121/Healthcare-Appointment-system",
      category: "Academic / Group",
    },
    {
      id: 10,
      title: "ETex Business Management",
      description:
        "A complete business management solution for enterprises, featuring inventory management, sales tracking, customer relations, and comprehensive reporting tools.",
      detailedDescription:
        "Built as a robust ERP and enterprise tool integrating inventory flow, sales orders, purchase invoicing, and customer records into one unified web interface modeled after modern enterprise standards.",
      features: [
        "Real-time inventory stock alerts and warehouse categorization",
        "Sales pipeline tracking from quotation to invoice",
        "Customer CRM ledger and transaction histories",
        "Integrated ERP module workflows and reporting metrics",
      ],
      video: etexVideo,
      languages: ["React", "Node.js", "PostgreSQL", "Express", "Odoo"],
      liveDemo: "https://example.com",
      gitCode: "https://github.com/HiwotBelay/Etex-clone",
    },
    {
      id: 11,
      title: "RichFam Clone Application",
      description:
        "A feature-rich social networking application inspired by modern platforms, with real-time messaging, content sharing, and community features.",
      detailedDescription:
        "A full-fledged social platform replica incorporating media feeds, post creation, commenting systems, live notifications, and responsive social profiles.",
      features: [
        "Dynamic feed with rich image and video media support",
        "Interactive comments, likes, and social engagement reactions",
        "User profile customizer and activity dashboard",
        "Mobile-first responsive architecture",
      ],
      video: richfamclonVideo,
      languages: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      liveDemo: "https://holistic-richfam-clone-virid.vercel.app/",
      gitCode: "https://github.com/tsadkankelemework2121/Holistic-richfam-clone",
    },
    {
      id: 12,
      title: "Finance Manager – Budget Control System",
      description:
        "A smart budgeting app designed to help students and individuals manage expenses, track income, and set financial goals with real-time insights and analytics.",
      detailedDescription:
        "Coin-Control eliminates budget anxiety by categorizing daily expenses, computing monthly savings rates, and visually warning users before exceeding budget thresholds.",
      features: [
        "Income and expense ledger with customized category tags",
        "Monthly budget allocation limits with visual alert indicators",
        "Visual expense breakdown charts and net-worth trend lines",
        "Exportable financial summaries for personal accounting",
      ],
      image: financeImage,
      languages: ["React", "TypeScript", "MongoDB", "Node.js", "Tailwind CSS"],
      liveDemo: "https://example.com",
      gitCode: "https://github.com/tsadkankelemework2121/Coin-Control",
      category: "Personal Project",
    },
    {
      id: 13,
      title: "Next.js Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js showcasing projects, skills, and contact information with smooth animations and interactions.",
      detailedDescription:
        "A minimalist, high-speed personal developer portfolio emphasizing responsive accessibility, optimized image pipelines, and clean component architecture.",
      features: [
        "Server-side rendered pages for rapid performance and SEO",
        "Dynamic project catalog and contact form integration",
        "Smooth micro-interactions and dark/light design elements",
      ],
      image: nextportImage,
      languages: ["Next.js", "Tailwind CSS", "TypeScript"],
      liveDemo: "https://tsadkan-portfolio.netlify.app/projects",
      gitCode: "https://github.com/tsadkankelemework2121/portfolio",
      category: "Personal Project",
    },
  ]

  // Synchronize route param :id with selectedProject modal
  useEffect(() => {
    if (id) {
      const found = projects.find((p) => p.id === parseInt(id, 10))
      if (found) {
        setSelectedProject(found)
      }
    }
  }, [id])

  // Manage body scroll and Escape key for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal()
      }
    }

    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "auto"
    }
  }, [selectedProject])

  const openModal = (project: Project) => {
    setSelectedProject(project)
    window.history.pushState(null, "", `/projects/${project.id}`)
  }

  const closeModal = () => {
    setSelectedProject(null)
    if (modalVideoRef.current) {
      modalVideoRef.current.pause()
    }
    window.history.pushState(null, "", `/projects`)
  }

  const handlePrevProject = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!selectedProject) return
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id)
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length
    const prevProj = projects[prevIndex]
    setSelectedProject(prevProj)
    window.history.pushState(null, "", `/projects/${prevProj.id}`)
  }

  const handleNextProject = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!selectedProject) return
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id)
    const nextIndex = (currentIndex + 1) % projects.length
    const nextProj = projects[nextIndex]
    setSelectedProject(nextProj)
    window.history.pushState(null, "", `/projects/${nextProj.id}`)
  }

  const handleVideoPlay = (e: React.MouseEvent, projectId: number) => {
    e.stopPropagation()
    const video = videoRefs.current[projectId]
    if (video) {
      if (playingVideos[projectId]) {
        video.pause()
        setPlayingVideos((prev) => ({ ...prev, [projectId]: false }))
      } else {
        video.play().catch(() => {})
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

  // Filter categories
  const categories = ["All", "AI/ML", "Personal Project"]
  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => Boolean(p.category && p.category.toLowerCase().includes(selectedCategory.toLowerCase())))

  return (
    <section className="relative min-h-screen bg-white pt-24 sm:pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-1 bg-purple-600 rounded-full" />
            <span className="text-xs uppercase tracking-widest text-purple-600 font-semibold">My Portfolio</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight text-black mb-4">
            Featured <span className="text-purple-600">Projects</span>
          </h1>
          <p className="text-gray-600 font-serif text-base sm:text-lg max-w-2xl leading-relaxed">
            A curated collection of web platforms, enterprise systems, and UI/UX solutions engineered with modern frontend, backend, and AI technologies.
          </p>

          {/* Category Filter Pills for Mobile and Desktop */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-6 sm:mt-8 pt-4 border-t border-gray-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-purple-600 text-white shadow-md shadow-purple-200"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col"
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={() => handleMouseLeave(project.id)}
            >
              {/* Media Container with preload="none" to prevent high memory usage and browser crash */}
              <div className="relative w-full h-56 sm:h-64 bg-gray-900 overflow-hidden">
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
                      preload="none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    
                    {/* Play/Pause Button - Always visible on mobile/tablet, hover on desktop */}
                    <button
                      onClick={(e) => handleVideoPlay(e, project.id)}
                      className="absolute bottom-4 right-4 w-11 h-11 bg-white/95 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg z-10 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transform sm:translate-y-2 sm:group-hover:translate-y-0"
                      aria-label={playingVideos[project.id] ? "Pause preview" : "Play preview"}
                    >
                      {playingVideos[project.id] ? (
                        <Pause className="w-5 h-5 text-black group-hover:text-white" />
                      ) : (
                        <Play className="w-5 h-5 text-black group-hover:text-white ml-0.5" />
                      )}
                    </button>
                  </>
                ) : (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  </>
                )}

                {/* Category Badge */}
                {project.category && project.category !== "Real World Project" && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-purple-600/95 text-white text-xs font-semibold rounded-full shadow-sm backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h2 className="text-lg sm:text-xl font-serif font-bold text-black mb-2.5 group-hover:text-purple-600 transition-colors duration-200 line-clamp-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 font-serif leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5">
                  {project.languages.slice(0, 3).map((lang, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium border border-gray-200"
                    >
                      {lang}
                    </span>
                  ))}
                  {project.languages.length > 3 && (
                    <span className="px-2.5 py-1 bg-purple-50 text-purple-700 text-xs rounded-full font-medium border border-purple-100">
                      +{project.languages.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2.5 pt-3 border-t border-gray-100" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => openModal(project)}
                    className="flex-1 px-3 py-2 bg-purple-50 text-purple-700 hover:bg-purple-600 hover:text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors text-center"
                  >
                    View Details
                  </button>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black text-white hover:bg-purple-600 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center"
                    aria-label="Live Demo"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  {project.gitCode && (
                    <a
                      href={project.gitCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white text-black hover:bg-gray-100 text-xs font-semibold rounded-lg transition-colors border border-gray-300 flex items-center justify-center"
                      aria-label="GitHub Code"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 z-50 animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto relative shadow-2xl flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-gray-100 flex items-center justify-between z-20">
              <div className="flex items-center gap-2">
                {selectedProject.category && selectedProject.category !== "Real World Project" && (
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-full uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                )}
                <span className="text-xs text-gray-500 font-medium">Project #{selectedProject.id} of {projects.length}</span>
              </div>
              
              <div className="flex items-center gap-2">
                {/* Prev / Next buttons inside modal */}
                <button
                  onClick={handlePrevProject}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                  aria-label="Previous project"
                  title="Previous project"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextProject}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                  aria-label="Next project"
                  title="Next project"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition ml-2"
                  aria-label="Close project details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-8 space-y-6">
              {/* Media Container */}
              <div className="w-full rounded-2xl overflow-hidden bg-black shadow-inner flex items-center justify-center">
                {selectedProject.video ? (
                  <video
                    ref={modalVideoRef}
                    src={selectedProject.video}
                    controls
                    autoPlay
                    playsInline
                    className="w-full max-h-[55vh] object-contain rounded-xl"
                  />
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full max-h-[55vh] object-contain rounded-xl"
                  />
                )}
              </div>

              {/* Title & Description */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-black mb-3">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-serif mb-6">
                  {selectedProject.detailedDescription || selectedProject.description}
                </p>
              </div>

              {/* Key Features if available */}
              {selectedProject.features && (
                <div className="bg-purple-50/70 rounded-2xl p-5 sm:p-6 border border-purple-100">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-purple-900 mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    Key Architecture &amp; Features
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-800">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies Used */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                  <Code className="w-4 h-4 text-purple-600" />
                  Technologies &amp; Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.languages.map((lang, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gray-100 text-gray-800 text-sm font-medium rounded-xl border border-gray-200"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer with Actions */}
            <div className="sticky bottom-0 bg-white/95 backdrop-blur-md px-6 py-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={closeModal}
                className="w-full sm:w-auto px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold rounded-xl transition"
              >
                Close
              </button>

              <div className="flex w-full sm:w-auto items-center gap-3">
                {selectedProject.gitCode && (
                  <a
                    href={selectedProject.gitCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-5 py-2.5 bg-white text-black border border-gray-300 hover:bg-gray-50 text-sm font-semibold rounded-xl transition flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub Repository
                  </a>
                )}
                <a
                  href={selectedProject.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-xl transition shadow-md flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProjectsSection
