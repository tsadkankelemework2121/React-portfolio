export default function AboutMe() {
    const profileImagePath = "/images/profile-picture.jpg" // Update this path with your profile image
    const languages = ["React", "TypeScript", "Tailwind CSS", "Next.js", "Node.js", "UI/UX Design"]
  
    return (
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main About Section */}
          <div className="grid grid-cols-3 gap-12 items-start mb-16">
            {/* Left: Bio Text */}
            <div className="col-span-1">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-900 leading-relaxed">
                  Work for money and design for love! I'm Tsadkan, a UI/UX Designer and Full Stack Developer based in
                  Ethiopia.
                </p>
              </div>
            </div>
  
            {/* Center: Profile Picture */}
            <div className="col-span-1 flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gray-200 flex-shrink-0">
                <img
                  src={profileImagePath || "/placeholder.svg"}
                  alt="Tsadkan Kelemework"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
  
            {/* Right: Download CV Button */}
            <div className="col-span-1 flex flex-col items-end justify-start">
              <button className="bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition">
                Download my CV
              </button>
            </div>
          </div>
  
          {/* Languages Section - Same width as profile picture */}
          <div className="flex justify-center">
            <div className="w-80">
              <h3 className="text-gray-600 text-sm font-medium mb-4 text-center">LANGUAGES & TOOLS</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 bg-gray-100 text-gray-900 rounded-full text-sm font-medium hover:bg-purple-100 hover:text-purple-600 transition"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  