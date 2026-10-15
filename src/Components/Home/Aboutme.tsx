import { Link } from "react-router-dom"
import image from "../../assets/profile.jpg"
import resumePdfUrl from "../../assets/Tsadkan_Kelemework.pdf?url"

export default function AboutSection() {
  const handleViewResume = () => {
    window.open(resumePdfUrl, "_blank")
  }

  return (
    <section className="bg-white px-4 sm:px-8 py-16 lg:px-20 lg:py-24 border-t border-gray-100">
      <div className="mx-auto max-w-7xl">
        {/* Two-column grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column - All Text Content */}
          <div className="flex flex-col space-y-6 order-2 lg:order-1">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-1 bg-purple-600 rounded-full" />
              <span className="text-xs uppercase tracking-widest text-purple-600 font-semibold">About Me</span>
            </div>

            {/* Name */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-black leading-tight">
                Tsadkan Kelemework
              </h2>
            </div>

            {/* Biography */}
            <div>
              <p className="text-base sm:text-lg text-gray-700 font-serif leading-relaxed max-w-xl">
                Hi, I'm <span className="text-purple-600 font-medium">Tsadkan Kelemework</span>. I am a UI/UX Designer and Web Developer. Passionate about creating innovative solutions, beautiful user interfaces, and engaging experiences through code.
              </p>
            </div>

            {/* Contact Information */}
            <div className="pt-2">
              <div className="space-y-2 font-serif text-gray-800">
                <p className="text-base sm:text-lg flex items-center gap-2">
                  <span className="text-purple-600 font-semibold">Location:</span> Bahir Dar, Ethiopia
                </p>
                <p className="text-base sm:text-lg flex items-center gap-2">
                  <span className="text-purple-600 font-semibold">Email:</span>
                  <a href="mailto:tsadkankelemeworktw@gmail.com" className="hover:text-purple-600 transition break-all">
                    tsadkankelemeworktw@gmail.com
                  </a>
                </p>
                <p className="text-base sm:text-lg flex items-center gap-2">
                  <span className="text-purple-600 font-semibold">Phone:</span>
                  <a href="tel:+251952615114" className="hover:text-purple-600 transition">
                    +251952615114
                  </a>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleViewResume}
                className="w-full sm:w-auto px-8 py-3 bg-black text-white font-serif text-base rounded-xl hover:bg-purple-600 transition-all duration-200 shadow-md text-center"
              >
                View Resume
              </button>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3 border-2 border-black text-black font-serif text-base rounded-xl hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-200 text-center"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end items-center order-1 lg:order-2">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-50">
                <img
                  src={image}
                  alt="Tsadkan Kelemework - UI/UX Designer"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
