import { useState } from 'react'
import './App.css'

function Week2() {
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
          <h2 className="text-4xl font-bold text-gray-800">Week 2</h2>

          {/* Section 1 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
              Food information database
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                For week two, our main goal was initialising our food information database. This database would store information about different foods such as how long after their expiry date are they still safe to consume and how to identify if the food is no longer safe to eat. We had quite a few options for where to find this data however we decided to go with eatbydate as it contains a large amount of data and the structure of the site is consistent meaning it was easier to webscrape. We compiled a list of all foods outlined on the site and ran a script which would visit each foods individual page, webscrape its information and finally store this data into our food database also hosted on supabase.
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
                Our biggest problem during this week was figuring out how to map the data from our product database and our food database. Although this seems easy at first, just match items based on name, eg. matching primary category bread = bread, and greek yogurt to yogurt however this gets complicated very quickly eg. Using this logic would lead to soy sauce and soy beans falling under the same category of soy.
              </p>
              <p>
                Our first solution was a fuzzymatching approach, categorising using name patterns and keeping a confidence level for each matching. If the confidence level was below the threshold around 70%, we would manually review the mapping and either accept or alter it. Although this approach seemed promising it turned out to be very inaccurate. Our food database had around 13000 entries and our product database had around 200 which meant the fuzzy matching model did not have enough data to produce accurate results.
              </p>
              <p>
                Our best and final solution was again, a heuristic approach. We compiled a list of the 500 most popular descriptors (primary and secondary) in our app. We then filtered out all of the descriptors which we deemed too vague eg: meats. For each descriptor remaining we manually matched it to its best fitting category in our food database. Finally we created another database which contained these mappings, so they could be queried. Although this approach took more time, it was definitely our best choice as it resulted in the largest widespread coverage. It also ensured a high level of accuracy since each mapping was manually chosen.
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
                For the barcode scanner we had already decided on the tool we were going to use prior to starting, that being the expo-camera. There are a lot of online resources and documentation which helped with setting up the scanner in our app. It overall wasn't much of a challenger for the camera to read the barcode and produce once getting used to the react native layout. This was one of the foundations of our project hence why it was tackled this early. A lot of console logs are used in order to determine the bugs and demonstrate functionality of the scanner when new features will be added.
              </p>
              <p>
                Camera permissions needed to be granted by the user in order for the scanner to be able to work.
              </p>
              <p>
                Once the camera could identify the barcode and show an alert on the screen with the correct number code of the barcode, we began testing its reliability in reading the barcodes.
              </p>
              <p>
                We had each picked out 10 different items with barcodes in order to test the expo camera and it got each one correct even with worse lighting conditions and various angles.
              </p>
              <p>
                Problems faced: Only a single barcode could be scanned before the app would essentially break and not allow for further scans. This was because the scanner would scan the barcode multiple times a second and the user would need to click 10-20 times for the "scan again" button to disappear. This was because the app did not know the scanner had scanned an item so a clause of whether it had been scanned or not was added to prevent this. So we added a function to set the state the scanner is in so if a barcode has been scanned it will no longer look for other barcodes to scan.
              </p>
              <p>
                Things to add: Allow users to add food manually if not found in the database
              </p>
              <p>
                In terms of the information we extracted for each product, we chose the Name, Brand, Barcode number, image url and its descriptors.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
              Categorizing products
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                Another huge problem we faced was identifying what food category a product fell into. Categorizing products is a large part of our app as we are supplying users with information about an item's shelf life and how to tell if it's still safe to consume. We're also supplying users recipes they can make based on the items category. This meant we had to be able to identify a product's category with a high level of accuracy.
              </p>
              <p>
                Open food facts provided a list of descriptors for each product however the layout is very inaccurate. One insight we did make was that the list of descriptors defining the food would normally get more specific the further down it was eg. Dairy Gold butter:
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

export default Week2