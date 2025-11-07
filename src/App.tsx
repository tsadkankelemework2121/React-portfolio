import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Layout/Navbar"

import Homepage from "./Pages/Home" 
import Certificationpage from "./Pages/Certification";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        
        <div>
          <Routes>
          
          <Route path="/" element={<Homepage/>}/>
          <Route path="/certification" element={<Certificationpage/>}/>
          <Route path="/projects" element={<Projects/>}/>
          </Routes>
        </div>
        {/* <Footer/> */}
      </div>
    </BrowserRouter>
  )
}

export default App;
