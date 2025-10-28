import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Layout/Navbar"

import Homepage from "./Pages/Home" 

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        
        <div>
          <Routes>
          
          <Route path="/" element={<Homepage/>}/>
           
          </Routes>
        </div>
        {/* <Footer/> */}
      </div>
    </BrowserRouter>
  )
}

export default App;
