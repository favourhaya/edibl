import { useState } from 'react'
import './App.css'

import { useNavigate } from "react-router-dom"

function futurePlans() {
  const [count, setCount] = useState(0)
   const navigate = useNavigate()

  return (
    <div className="bg-amber-50 overflow-x-hidden w-screen h-screen flex justify-center">
       
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="hidden md:block absolute top-[-70px] right-[-180px] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 opacity-90" />
      <div className="absolute top-[128px] right-[32px] w-[140px] h-[140px] rounded-full border-2 border-white opacity-70" />
      <div className="hidden md:block absolute bottom-[-10px] right-[150px] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 opacity-90" />
      
      <div className="hidden md:block absolute top-[-70px] left-[-180px] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 opacity-90" />
      <div className="absolute top-[128px] left-[120px] z-1 w-[140px] h-[140px] rounded-full border-2 border-white opacity-70" />
      <div className="hidden md:block absolute bottom-[100px] left-[150px] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 opacity-90" />
        </div>
      <div className="bg-white max-w-3xl w-full z-1 shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-12 px-8">
          <h1 className="text-6xl md:text-7xl font-bold text-center tracking-tight">Edibl</h1>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 space-y-12 overflow-y-auto max-h-[calc(100vh-200px)]">
          
          {/* Week Header */}
          <h2 className="text-4xl font-bold text-gray-800">Future plans and implementations</h2>

          {/* Section 1 */}
          <section className="space-y-4">
            
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                Although our development of the app has concluded, we still have many ideas we intend to implement in the future. Here are the main features we think would be a mix of challenging and interesting.
              </p>

             
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
            Household ingredient sharing

            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                We plan to implement “households”. Groups of people who can manipulate the same pantry. This would be useful for families, workspaces and roommates. Currently each user has their own pantry meaning they only have control. This feature is planned to be peer to peer and either work by inviting members via email or using location proximity to find households near you.
            
  </p>
            </div>
          </section>

    
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
Expanding database
</h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                We would also like to expand our product and food table. Expanding our product table would increase user experience as this would reduce errors of their scanned items not being present in the database. Improving our food information table would result in better coverage. More niche items would have information regarding them in the table. This would also result in more accurate categorization and predications of safety windows and safety markers.

              </p>
            </div>
          </section>


                    <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
Moving away from manual entry to fuzzy
</h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                Another goal would be to implement a fuzzy matching algorithm correctly which categorizes food items with a high level of accuracy. This approach failed during this project as our food information table was not nearly verbose enough however if we do expand, this approach becomes far more viable and practical in the long term.

              </p>
            </div>
          </section>


      


           <div className="fixed bottom-0 left-0 w-full flex justify-center pb-6 pointer-events-none">
        <div className="pointer-events-auto bg-white shadow-lg rounded-2xl px-6 py-3 flex gap-6 border">


          <button
            onClick={() => navigate("/week6")}
            className="px-4 py-2 rounded-xl font-semibold text-gray-700 hover:bg-emerald-100 transition"
          >
            Week 6 
          </button>

          

        </div>
      </div>

        </div>
      </div>
    </div>
  )
}

export default futurePlans