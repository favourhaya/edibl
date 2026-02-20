import { useState } from 'react'
import './App.css'
import google from './images/week5/googleauth.png'
import index from './images/week5/index.png'
import index2 from './images/week5/index2.png'
import { useNavigate } from "react-router-dom"

function Week5() {
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
          <h2 className="text-4xl font-bold text-gray-800">Week 6</h2>

          {/* Section 1 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
            Beginning of week 6
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                During week 6 our primary goal was closing any loose ends. We did mostly testing , documentation and cleaning up our codebase.
              </p>

             
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
            Testing
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
We implemented unit testing to ensure all the functions were working correctly and our error handling was sufficient. We wrote these unit test cases for the pantry functions, recipe functions, notification system and the backend server functions too.            

  </p>
<p>
    When testing at first we were confused about which software to use. One key error we made throughout our functional specifications was overlooking testing. At first we used built in node modules such as assert and before/after. Upon further research we found that we could use Jest, a javascript built in framework for testing due to its speed and ease of use.

</p>
            </div>
          </section>

    
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
Merge conflicts            
</h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                    During week 6 we were also receiving more merge conflicts. This was because we were both making many micro- adjustments to many files e.g name name changes. In order to resolve these merge conflicts, we would go on call and systematically go through each page analyzing which changes were made. We then decided to message each other about every change we planned to make no matter how small.
              </p>
            </div>
          </section>


                    <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
Error Handling
</h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
After unit testing we realized that we needed error handling, especially for our recipe system. This makes sense as our recipe system is pure logic meaning there’s room for human error. One example was handling  duplicates.
              </p>
            </div>
          </section>


               <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
Ui Design:
</h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                At first we integrated back buttons however both of us decided that we never press back button we simply just swiped left to go back
Used phone simulator (expo Go) for UI changes as it was instant and easier to test different designs

              </p>
            </div>
          </section>


           <div className="fixed bottom-0 left-0 w-full flex justify-center pb-6 pointer-events-none">
        <div className="pointer-events-auto bg-white shadow-lg rounded-2xl px-6 py-3 flex gap-6 border">


          <button
            onClick={() => navigate("/week5")}
            className="px-4 py-2 rounded-xl font-semibold text-gray-700 hover:bg-emerald-100 transition"
          >
            Week 5
          </button>


          <button
            onClick={() => navigate("/futurePlans")}
            className="px-4 py-2 rounded-xl font-semibold text-gray-700 hover:bg-emerald-100 transition"
          >
            Future plans
          </button>

          

        </div>
      </div>

        </div>
      </div>
    </div>
  )
}

export default Week5