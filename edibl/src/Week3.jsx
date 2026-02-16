import { useState } from 'react'
import './App.css'

function Week3() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-amber-50 w-screen h-screen flex justify-center">
      <div className="hidden md:block absolute top-[-70px] right-[-180px] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 opacity-90" />
      <div className="absolute top-[128px] right-[32px] w-[140px] h-[140px] rounded-full border-2 border-white opacity-70" />
      <div className="hidden md:block absolute bottom-[-10px] right-[150px] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 opacity-90" />
      
      <div className="hidden md:block absolute top-[-70px] left-[-180px] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 opacity-90" />
      <div className="absolute top-[128px] left-[120px] z-1 w-[140px] h-[140px] rounded-full border-2 border-white opacity-70" />
      <div className="hidden md:block absolute bottom-[100px] left-[150px] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 opacity-90" />

      <div className="bg-white max-w-3xl w-full z-1 shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-12 px-8">
          <h1 className="text-6xl md:text-7xl font-bold text-center tracking-tight">Edibl</h1>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 space-y-12 overflow-y-auto max-h-[calc(100vh-200px)]">
          
          {/* Week Header */}
          <h2 className="text-4xl font-bold text-gray-800">Week 3</h2>

          {/* Section 1 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
              Barcode and backend functionality
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                In week 3 we connected the barcode scanner function to our backend server. When an item was scanned, the barcode number was saved and sent to our server in terms of an api call. This number was queried in our database to check if it was in our product database, if yes then it's information would show up.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
              Manually adding food to the database
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                In the case of an item not being readable or not being in our product database, we decided to allow users to manually add the information about the product.
              </p>
              <p>
                A small problem arised from this as we needed to figure out how to let users input the products' category in order to get its shelf life information. Allowing for users to type in a category directly could lead to unexpected inputs or inputs which are too broad or specific. We decided to provide a selection field instead containing all of the available options for categories. Users are able to find the category of best fit using search by scrolling through.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
              Basic user interface
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                We developed a simple app ui in this stage too for ease of testing and navigation. It was essentially just a homepage with 4 buttons. Once for adding food to the database. Another one for checking your pantry and all the food available there and the last two were about getting recipes recommendations and viewing your previously made recipes. The ui had a basic green and white colour scheme however we will polish it later as functionality is our priority.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
              Why didn't end up going for Redis for storing user food data
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                Initially we had decided that we will be using Redis as our database for the user as it was fast and reliable. But once we had thought more and explored other solutions we realised this was not the right approach for our project. We wanted the app to be able to be used offline which was not possible with Redis as it would need a server to run. We hadn't considered storing the data for each user on their phone and after reconsidering we chose to use expos SQLite as the storage of personal user information such as their scanned foods.
              </p>
              <p>
                Initially Redis was meant to be used for push notifications to alert users of upcoming expiry dates of food This was prior to learning about expo's great built in libraries which included expo-notifications. This allowed for much easier implementation of notifications and once again didn't require a server to run the Redis database. They are not actually push notifications as they are sent from the user's phone who has the app instead of using a server to send the notification. This has another advantage which is being able to send the notifications while offline.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
              How Food Data is stored
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                Once we decided on using Expo-SQLite for the users personal database we began to write the schema for the food item and its attributes it will have.
              </p>
              <p>
                Issues faced:
              </p>
              <p>
                Future additions: Make the different save locations such as fridge, freezer, pantry each with different safety windows
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
              How Notifications work
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                Firstly had to get user permissions in order to send notifications, same process as with camera permissions so it wasn't much work. Expo-notifications was in general, quite simple to work with but also offered a good amount of customisation. We ended up sticking with quite a basic notification as that's all our app requires for now. Used a test notification to get functionality correct before adding more information and making more complex functions. Daily expiry checks at 9am and if a food had less than 3 days left before its safety window was out.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
              Future additions
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                Daily recipe suggestions notification based on the food in users pantry. Provide a please throw away notification when a food has reached the end of its safety window and delete it from the users pantry. Allow users to choose when they would like to receive the notifications and also how early in the safety window should a reminder be sent(customisation)
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

export default Week3