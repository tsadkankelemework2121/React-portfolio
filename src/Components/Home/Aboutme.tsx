import image from "../../assets/profile.jpg"
import resumePdfUrl from "../../assets/Tsadkan-Kelemework (1).pdf?url"

export default function AboutSection() {
  const handleViewResume = () => {
    window.open(resumePdfUrl, '_blank')
  }

  return (
    <section className="bg-white px-8 py-16 lg:px-20 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Two-column grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - All Text Content */}
          <div className="flex flex-col space-y-6">
            {/* Name */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-serif font-semibold text-black leading-tight mb-4">
                <span className="text-black">Tsadkan Kelemework</span>
              </h1>
            </div>

            {/* Biography */}
            <div>
              <p className="text-sm lg:text-base text-gray-700 font-serif leading-relaxed max-w-lg">
                Hi, I'm <span className="text-purple-600 font-medium">Tsadkan Kelemework</span>. Specialized in UI/UX Design and Frontend Development with aspirations in Full-Stack Engineering. Passionate about creating innovative solutions, beautiful user interfaces and experiences through code.
              </p>
            </div>

            {/* Contact Information */}
            <div className="pt-2">
              <div className="space-y-2 font-serif">
                <p className="text-lg text-black">Bahir Dar, Ethiopia</p>
                <p className="text-lg text-black">tsadkankelemeworktw@gmail.com</p>
                <p className="text-lg text-black">+251952615114</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button 
                onClick={handleViewResume}
                className="px-8 py-3 bg-black text-white font-serif text-base rounded-lg hover:bg-purple-600 transition-colors"
              >
                View Resume
              </button>
              <button className="px-8 py-3 border-2 border-black text-black font-serif text-base rounded-lg hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-colors">
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-end items-center h-full">
            <div className="relative w-full max-w-md">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src={image}
                  alt="Tsadkan Kelemework - UI/UX Designer"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
