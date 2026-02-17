import { useState } from 'react'
import './App.css'
import expoNative from './images/week1/expoNative.png'
import openfood from './images/week1/openFood.png'
import prisma from './images/week1/Prisma.png'
import schema from './images/week1/schema.png'
import Screenshot from './images/week1/Screenshot 2026-02-17 114314.png'
import supabase from './images/week1/supabase.png'
import url from './images/week1/url.png'

import { useNavigate } from "react-router-dom"

function Home() {
  const [count, setCount] = useState(0)
 const navigate = useNavigate()
  return (
    <div className=" bg-amber-50 w-screen h-screen flex justify-center ">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className=" hidden md:block not-first: absolute top-[-70px] right-[-180px] w-[400px] h-[400px] rounded-full bg-gradient-to-r  from-emerald-500 to-teal-600 opacity-90" />
        <div className="absolute top-[128px] right-[32px] w-[140px] h-[140px] rounded-full border-2 border-white opacity-70" />
              <div className=" hidden md:block not-first: absolute bottom-[-10px] right-[150px] w-[400px] h-[400px] rounded-full bg-gradient-to-r  from-emerald-500 to-teal-600 opacity-90" />

             
              <div className=" hidden md:block not-first: absolute top-[-70px] left-[-180px] w-[400px] h-[400px] rounded-full bg-gradient-to-r  from-emerald-500 to-teal-600 opacity-90" />
        <div className="absolute top-[128px] left-[120px] z-1 w-[140px] h-[140px] rounded-full border-2 border-white opacity-70" />
              <div className=" hidden md:block not-first: absolute bottom-[100px] left-[150px] w-[400px] h-[400px] rounded-full bg-gradient-to-r  from-emerald-500 to-teal-600 opacity-90" />
</div>
      <div className="bg-white max-w-3xl w-full z-1  shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-12 px-8">
          <h1 className="text-6xl md:text-7xl font-bold text-center tracking-tight">Edibl</h1>
         
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 space-y-12 overflow-y-auto max-h-[calc(100vh-200px)]">
          
          {/* Week Header */}
         
            <h2 className="text-4xl font-bold text-gray-800">Week 1</h2>
          

          {/* Section 1 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
              Initialising Project
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                Our project started like all projects normally do, initialising the software and installing dependencies. We set up a react native expo app. Expo allowed us to run the app on our phones regardless of environment. For example one of us had a windows laptop meaning expo was essential to run the ios app.
              </p>
              <p>
                 <img src={expoNative} alt="" className="w-sm h-sm justify-self-center" />
                We also initialised our database to store information regarding food. We decided to use prismaORM for its speed and convenience. This database was then hosted using supabase.
              <div className="flex justify-center">

                  <img src={prisma} alt="" className="w-[200px] h-[200px] justify-self-center" />
                 <img src={supabase} alt="" className="w-[200px] h-[200px] justify-self-center" />

              </div>
              
              </p>
              <p>
                We installed the essential dependencies needed for the app such as expo-camera to allow us to scan barcodes and Nativewind, which allowed us to style the app however we did install more dependencies as needed.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
              Populating the product database
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                In order to populate the product database we utilised the openfoodfacts Api. Openfoodfacts has a collection of over 4 million different products alongside their barcode, nutritional information and all other information regarding the product. Our goal was to create a script that would collect products alongside their manufacture information and add it into our database.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-emerald-500 rounded"></span>
              Filtering product extraction
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-4 pl-5">
              <p>
                Our original approach was to collect all the data from the api however collecting 4 million entries would be a virtually impossible task for a script. Collecting that much data would take far too long and wouldn't make sense for our small scale app.
              </p>
              <p>
                Our solution was to filter the region to Ireland only. Although this approach is quite heuristic as a user might scan an item from another country, the vast majority of users will be scanning Irish products.
      
              </p>
              <p>
               <img src={url} alt="" className="w-lg h-lg justify-self-center" />

                In terms of the information we extracted for each product, we chose the Name, Brand, Barcode number, image url and its descriptors.
              </p>
            <img src={schema} alt="" className="w-sm h-sm justify-self-center" />

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
                               <img src={Screenshot} alt="" className="w-sm h-sm justify-self-center" />

              </p>
              <p>

                However this was not the case for quite a few products eg: Heinz mayonnaise [ 'en:condiments', 'en:fats', 'en:mayonnaises' .'en:sauces', ],
              </p>
              <p>
                In order to overcome this issue, we decided to extract multiple different categories for each product. The item at the bottom of the list would be the primary category, the next two above it would be the secondary categories and the rest of the categories would fall into the all categories field. This means that if a category is too niche or too vague, we have other categories to choose from which reduces our chance of error.
              </p>
            </div>
          </section>

           <div className="fixed bottom-0 left-0 w-full flex justify-center pb-6 pointer-events-none">
        <div className="pointer-events-auto bg-white shadow-lg rounded-2xl px-6 py-3 flex gap-6 border">

          

          <button
            onClick={() => navigate("/week2")}
            className="px-4 py-2 rounded-xl font-semibold clickable text-gray-700 hover:bg-emerald-100 transition"
          >
            Week 2
          </button>

        </div>
      </div>

        </div>
      </div>
    </div>
  )
}

export default Home