import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import './App.css'

function Week2() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  return (
    <div className="relative bg-amber-50 w-full min-h-screen flex justify-center overflow-x-hidden">

      {/* Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="hidden md:block absolute top-[-70px] right-[-180px] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 opacity-90" />
        <div className="absolute top-[128px] right-[32px] w-[140px] h-[140px] rounded-full border-2 border-white opacity-70" />
        <div className="hidden md:block absolute bottom-[-10px] right-[150px] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 opacity-90" />

        <div className="hidden md:block absolute top-[-70px] left-[-180px] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 opacity-90" />
        <div className="absolute top-[128px] left-[120px] w-[140px] h-[140px] rounded-full border-2 border-white opacity-70" />
        <div className="hidden md:block absolute bottom-[100px] left-[150px] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 opacity-90" />
      </div>

      {/* Card */}
      <div className="bg-white max-w-3xl w-full z-10 shadow-xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-12 px-8">
          <h1 className="text-6xl md:text-7xl font-bold text-center tracking-tight">
            Edibl
          </h1>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 pb-32 space-y-12 overflow-y-auto max-h-[calc(100vh-200px)]">

          <h2 className="text-4xl font-bold text-gray-800">Week 2</h2>

          {/* Section 1 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
              Food information database
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                For week two, our main goal was initialising our food information database...
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
              Mapping information
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                Our biggest problem during this week was figuring out how to map the data...
              </p>
              <p>
                Our first solution was a fuzzymatching approach...
              </p>
              <p>
                Our best and final solution was again, a heuristic approach...
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
              Barcode Scanner
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                For the barcode scanner we had already decided on the tool...
              </p>
              <p>
                Camera permissions needed to be granted...
              </p>
              <p>
                Once the camera could identify the barcode...
              </p>
            </div>
          </section>



 <div className="fixed bottom-0 left-0 w-full flex justify-center pb-6 pointer-events-none">
        <div className="pointer-events-auto bg-white shadow-lg rounded-2xl px-6 py-3 flex gap-6 border">

          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 rounded-xl font-semibold text-gray-700 hover:bg-emerald-100 transition"
          >
            Home
          </button>

          <button
            onClick={() => navigate("/week3")}
            className="px-4 py-2 rounded-xl font-semibold text-gray-700 hover:bg-emerald-100 transition"
          >
            Week 3
          </button>

        </div>
      </div>
        </div>
      </div>

      {/* Bottom Navigation */}
     

    </div>
  )
}

export default Week2
