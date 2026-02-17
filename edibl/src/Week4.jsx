import { useState } from 'react'
import './App.css'
import Spoonacular from './images/week4/download-removebg-preview (20).png'

import { useNavigate } from "react-router-dom"

function Week4() {
  const [count, setCount] = useState(0)
 const navigate = useNavigate()
  return (
    <div className="bg-amber-50 overflow-hidden w-screen h-screen flex justify-center">

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
          <h2 className="text-4xl font-bold text-gray-800">Week 4</h2>

          {/* Section 1 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
              Recipe API
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                One of the main objectives for this week is to set up a working recipe with the users' saved ingredients inside their pantry. We had 3 choices for our recipe api that being: Spoonacular, Edamam, TheMealDb. Each of these provided similar features that being, using ingredients and getting meals/recipes back with those ingredients.
              </p>
              <p>
                Spoonacular: Free plan which allows for 50 recipe calls per day and offers a really wide amount of recipes. It accepts a lot of different ingredients which works in our favour too. Easy to use API and helpful website.
              </p>
              <p>
                Edamam: Offers a free plan which actually allowed for more requests but was set monthly, also a wide amount of recipes and ingredients. Fairly easy intuitive api calls. Didn't offer
              </p>
              <p>
                TheMealDb: Free of charge, quite limited in terms of functionality compared to other 2. Searching by multiple ingredients was not a part of the free plan which was vital to our project.
              </p>
              <p>
                <img src={Spoonacular} alt="" className="w-sm h-sm justify-self-center" />

                Settled on Spoonacular as it was most intuitive and also offered a decent free plan for testing purposes. Although if the app was to be made public we would choose Edamam as it allows for much more calls monthly and is the same price as Spoonacular.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
              How it works
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                A call is made to Spoonacular with all of the users saved items inside of their pantry. Spoonacular then processes the request and filters recipes which contain most of the provided ingredients. It then sends back 3 recipes which most match the provided items. It sends information with the recipe name, recipe id, image, instructions, ingredients, cooking time, servings. There is also much more info provided if needed later on. We then display the recipe name and basic info in the recipes page. The user can then click on the recipe to find out more information on each given recipe such as detailed instructions.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
              Why we chose 3 recipes per call
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                This was for testing purposes as it wouldn't waste too much tokens compared to our planned 6, when the majority of the testing is complete it will be changed.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
              Problems
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                But the issue which we soon found is that it will always give the same 3 recipes if given the same ingredients, this will be changed in the future updates.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
              Database expansion
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                Lastly in week 5 we decided to expand our product database by 3 thousand entries. We altered the api to only include products sold in the uk. This helped diversify the database and further increase our product coverage.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
              Why didn't end up going for Redis for storing user food data
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                Initially Redis was meant to be used for push notifications to alert users of upcoming expiry dates of food This was prior to learning about expo's great built in libraries which included expo-notifications. This allowed for much easier implementation of notifications and once again didn't require a server to run the Redis database. They are not actually push notifications as they are sent from the user's phone who has the app instead of using a server to send the notification. This has another advantage which is being able to send the notifications while offline.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
              Future Additions
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                Would also like to prioritise the items closest to expiry rather than taking every item at the same value(some more important than others)
              </p>
            </div>
          </section>
           <div className="fixed bottom-0 left-0 w-full flex justify-center pb-6 pointer-events-none">
        <div className="pointer-events-auto bg-white shadow-lg rounded-2xl px-6 py-3 flex gap-6 border">

          <button
            onClick={() => navigate("/week3")}
            className="px-4 py-2 rounded-xl font-semibold text-gray-700 hover:bg-emerald-100 transition"
          >
            Week 3
          </button>

          <button
            onClick={() => navigate("/week5")}
            className="px-4 py-2 rounded-xl font-semibold text-gray-700 hover:bg-emerald-100 transition"
          >
            Week 5
          </button>

        </div>
      </div>

        </div>
      </div>
    </div>
  )
}

export default Week4