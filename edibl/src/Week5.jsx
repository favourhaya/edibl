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
          <h2 className="text-4xl font-bold text-gray-800">Week 5</h2>

          {/* Section 1 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
              Logging in
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                Both felt this part of the project would be easy as one of us had previous experience with setting up something similar, that is why we had left logging in and authentication near the end. This actually was somewhat harder than anticipated and faced a couple of issues along the way. The setup: Used google cloud to authenticate and log users in. More secure than having it saved in our database as the data is never saved, only sent to our app from either google or apple to log the user in.
              </p>

            <img src={google} alt="" className="w-[] h- justify-self-center" />

              <p>
                Problems: The user is stuck on the login screen even after logging in successfully and cannot go anywhere else in the app. Not the intended outcome as the user should be taken to the homepage once logged in. But if the app is closed and then opened the user is logged in and taken to the home page upon entering the app again. The problem was that the user state is not being changed so even if the app receives the correct response the user is stuck on the login screen. Added an additional file which monitors the users current status within the app. Setting up clients was also a challenge and had to follow a youtube tutorial in order to set everything up correctly. Initially only had apple login working as when a user tried to login using google they would get the following error:
              </p>
              <p>
                This was because the webClient was not set up correctly but also hadn't added the email address into the test users. This took quite a while to find the solution online.
              </p>
              <p>
                Future: Add a feature where if a user is not currently logged in they can only see the log in screen. Had an idea of using a guest login but came to the conclusion that it would be counteractive and wouldn't fit our app.
              </p>
              <p>
                This was because the webClient was not set up correctly but also hadn't added the email address into the test users. This took quite a while to find the solution online.
              </p>
              <p>
                Future: Add a feature where if a user is not currently logged in they can only see the log in screen. Had an idea of using a guest login but came to the conclusion that it would be counteractive and wouldn't fit our app.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
              Revised ui design
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                We decided it was time to reconfigure our ui design since a lot of new features and functionality had been added. We had trouble picking a particular colour scheme as we didn't want the ui to look too plain and also didn't want it to become too visually distracting. After messing around with colours and prototyping we decided to go with a vibrant yet muted selection of 4 colours. These colours appear all throughout the app which maintains visual harmony. We also implemented a bottom slider tab. This slider allows for experienced users to navigate through the app more easily. When swiped up users can see food which is soon to expire, recipes to make, and recipes which have been saved by them.
              </p>

               <div className="flex justify-center gap-24">
              
                                <img src={index} alt="" className="w-[200px] h-[350px] justify-self-center" />
                               <img src={index2} alt="" className="w-[200px] h-[350px] justify-self-center" />
              
                            </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
              Naming-final days
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                Easy at the start but became confusing after a while due to having many similar names such as food, foodData, Food, getFoods, foodNames.
              </p>
            </div>
          </section>


           <div className="fixed bottom-0 left-0 w-full flex justify-center pb-6 pointer-events-none">
        <div className="pointer-events-auto bg-white shadow-lg rounded-2xl px-6 py-3 flex gap-6 border">


          <button
            onClick={() => navigate("/week4")}
            className="px-4 py-2 rounded-xl font-semibold text-gray-700 hover:bg-emerald-100 transition"
          >
            Week 4
          </button>

        </div>
      </div>

        </div>
      </div>
    </div>
  )
}

export default Week5