import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Week2 from "./Week2"
import Week3 from "./Week3"
import Week4 from "./Week4"
import Week5 from "./Week5"
import Week6 from "./Week6"
import futurePlans from "./Future"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/week2" element={<Week2 />} />
        <Route path="/week3" element={<Week3 />} />
        <Route path="/week4" element={<Week4 />} />
        <Route path="/week5" element={<Week5 />} />
        <Route path="/week6" element={<Week6 />} />
        <Route path="/Future" element={<futurePlans />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App