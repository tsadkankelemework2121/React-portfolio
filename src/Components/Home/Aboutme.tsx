import image from "../../assets/profile.jpg"
import resumePdfUrl from "../../assets/Tsadkan-Kelemework (1).pdf?url"

export default function AboutSection() {
  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = resumePdfUrl
    link.download = "Tsadkan-Kelemework-Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="min-h-screen bg-white px-8 py-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Main grid layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-9 items-center">
          {/* Left Column - Biography */}
          <div className="flex flex-col justify-between h-full">
            {/* Biography Header */}
            <div>
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-8">Biography</p>

              {/* Main Heading with purple accent dot */}
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-5 h-2 bg-purple-600 rounded-full mt-2 shrink-0"></div>
                  <h1 className="text-3xl lg:text-2xl font-serif leading-tight">
                  Hi, I'm  <span className="text-purple-600">Tsadkan Kelemework</span> Specialized in UI/UX Design and Frontend Development with aspirations in Full-Stack Engineering.Passionate about creating innovative solutions beatiful user interfaces and experiences through code.
                  </h1>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-6">Contact</p>
              <div className="space-y-3 font-serif text-base">
                <p className="text-black">Bahir Dar, Ethiopia</p>
                <p className="text-black">tsadkankelemeworktw@gmail.com.com</p>
                <p className="text-black">+251952615114</p>
              </div>
            </div>
          </div>

          {/* Center Column - Profile Image */}
          <div className="flex justify-center lg:col-span-1">
            <div className="relative w-full max-w-sm">
              <div 
                className="rounded-full overflow-hidden border-4 border-gray-300 shadow-lg"
                style={{
                  aspectRatio: '2/3'
                }}
              >
                <img
                  src={image}
                  alt=" UI/UX Designer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-end gap-6 h-full">
            <button 
              onClick={handleDownloadResume}
              className="px-12 py-3 bg-black text-white font-serif text-lg rounded-lg hover:bg-purple-600 transition-colors"
            >
              Download Resume
            </button>
            <button className="px-8 py-3 border-2 text-black font-serif text-lg rounded-lg hover:bg-purple-600 hover:text-white transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
