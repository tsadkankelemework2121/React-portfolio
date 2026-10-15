import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./Layout/Navbar"
import ScrollToTop from "./Components/ScrollToTop"

import Homepage from "./Pages/Home" 
import Certificationpage from "./Pages/Certification"
import Projects from "./Components/Projects/Projects"
import ContactPage from "./Pages/Contact"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col text-gray-900 selection:bg-purple-100 selection:text-purple-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/certification" element={<Certificationpage />} />
            <Route path="/certifications" element={<Certificationpage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<Projects />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App

