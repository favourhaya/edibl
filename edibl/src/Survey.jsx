import { useState } from 'react'
import './App.css'
import S1 from './images/Survey/S1.png'
import S2 from './images/Survey/S2.png'
import S4 from './images/Survey/S4.png'
import S5 from './images/Survey/S5.png'
import S6 from './images/Survey/S6.png'
import S7 from './images/Survey/S7.png'
import S9 from './images/Survey/S9.png'

import { useNavigate } from "react-router-dom"

function Survey() {
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
        
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-12 px-8">
          <h1 className="text-6xl md:text-7xl font-bold text-center tracking-tight">Edibl</h1>
        </div>

        <div className="p-8 md:p-12 space-y-12 overflow-y-auto max-h-[calc(100vh-200px)]">
          
          <h2 className="text-4xl font-bold text-gray-800">User satifcation survey results</h2>

          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
Navigability          
  </h3>
            <img src={S1} alt="" className="w-[700px] h-[350px] justify-self-center" />
          </section>

           <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
Barcode Scanner          
  </h3>
 <img src={S2} alt="" className="w-[700px] h-[350px] justify-self-center" />
   </section>
           
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
Pantry Handling          
  </h3>
   <img src={S4} alt="" className="w-[700px] h-[350px] justify-self-center" />
          </section>


                   <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>

Recipe Recommendation 
 </h3>
            <img src={S5} alt="" className="w-[700px] h-[350px] justify-self-center" />
          </section>


  <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
Recipe Instructions 
 </h3>
            <img src={S6} alt="" className="w-[700px] h-[350px] justify-self-center" />
          </section>



  <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
Saftery window information  </h3>
           
            <img src={S7} alt="" className="w-[700px] h-[350px] justify-self-center" />
          </section>

  <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
Rating the overall app  </h3>
            <img src={S9} alt="" className="w-[700px] h-[350px] justify-self-center" />
          </section>


  <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
Feedback  

</h3>
            <ul>
                <li> <span className= "font-bold">Recipe suggestions: </span> <br /> Multiple responses indicated that the recipe recommendations need improvement, with specific issues including suggestions not matching saved items, requiring extra ingredients, and offering recipes using similar but not exact ingredients. The recipes section could be generally improved.</li>
                <br />
                <li> <span className= "font-bold">Safety information:  </span> <br />Feedback highlighted that safety markers were sometimes hard to find and confusing, with one example noting inappropriate markers for the food item scanned. But users found the feature overall useful.</li>
<br />
                <li> <span className= "font-bold">User Experience/Features: </span> <br />Suggestions included improving login options and visibility of the logged-in status. The app was described as easy to use but a little basic.</li>
<br />
                <li> <span className= "font-bold">Data</span> <br /> One piece of feedback noted that manually entering expiry dates with dashes was annoying.
 </li>
<br className="" />
   <li> <span className= "font-bold">Clarity:</span> One respondent mentioned that recipe instructions were sometimes unclear. <br /> 
 </li>


            </ul>
           
          </section>


            <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
Reflecting on results  </h3>
           <p className="">
Thanks to these results we now have a better understanding as to what is expected from the app from actual users. We can see that the app is really easy to use for first time users, which was one of our goals in creating this app, to be easy to use for everyone. The barcode scanner was also easily used by all users, which is a core feature of the app. Pantry management was also rather easy to use for almost all users, we had gone through a couple of iterations to find the simplest to use and will stick with the current design as it seemed to work. A not so liked feature seemed to be the recipe suggestions as it looked to give inaccurate recipes to most users when given some specific ingredients. This can be fixed with better categorisation of items in the future, and would allow for more accurate recipes. A feature that was positively received by almost all users was the safety markers. We plan to make the safety markers of food more visible/accessible in the future as this feature received really positive feedback. 



           </p>
          </section>

           <div className="fixed bottom-0 left-0 w-full flex justify-center pb-6 pointer-events-none">
        <div className="pointer-events-auto bg-white shadow-lg rounded-2xl px-6 py-3 flex gap-6 border">


          <button
            onClick={() => navigate("/week1")}
            className="px-4 py-2 rounded-xl font-semibold text-gray-700 hover:bg-emerald-100 transition"
          >
            Week 1
          </button>



          

        </div>
      </div>

        </div>
      </div>
    </div>
  )
}

export default Survey