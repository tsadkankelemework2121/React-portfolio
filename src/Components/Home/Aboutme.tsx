import image from "../../assets/profile.jpg"
export default function AboutSection() {
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
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <h1 className="text-3xl lg:text-4xl font-serif leading-tight">
                    Work for money and design for love! <span className="text-purple-600">I'm</span> Bruno, an UI/UX
                    Interaction Designer based in Poland.
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
              <div className="aspect-[2/3] rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
                <img
                  src={image}
                  alt="Bruno - UI/UX Designer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-end gap-6 h-full">
            <button className="px-12 py-3 bg-black text-white font-serif text-lg rounded-lg hover:bg-purple-600 transition-colors">
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
