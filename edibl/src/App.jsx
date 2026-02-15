import { useState } from 'react'

import './App.css'
import { Router } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" bg-gray-200 w-screen h-screen absolute overflow-hidden flex justify-center ">


  <div className=" bg-white  w-2/3 md:w-2/5  p-5 mt-2 overflow-scroll">
  
<h1 className='text-center text-7xl'>Edibl</h1>
 
 <h2 className=" p-5  mt-5 text-3xl">Week 1</h2>
 <t className="p- text-md">
  <h3 className='font-bold text-2xl'>Initialising Project</h3>
Our project started like all projects normally do, initialising the software and installing dependencies. We set up a react native expo app. Expo allowed us to run the app on our phones regardless of environment. For example one of us had a windows laptop meaning expo was essential to run the ios app. 
We also initialised our database to store information regarding food. We decided to use prismaORM for its speed and convenience. This database was then hosted using supabase.
We installed the essential dependencies needed for the app such as expo-camera to allow us to scan barcodes and Nativewind, which allowed us to style the app however we did install more dependencies as needed.
<br />
<br />
<br />
  <h3 className='font-bold text-2xl'>Populating the product database</h3>
In order to populate the product database we utilised the openfoodfacts Api. Openfoodfacts has a collection of over 4 million different products alongside their barcode, nutritional information and all other information regarding the product. Our goal was to create a script that would collect products alongside their manufacture information and add it into our database.
<br />
<br />
<br />
<h3 className="font-bold text-2xl">Filtering product extraction</h3>
Our original approach was to collect all the data from the api however collecting 4 million entries would be a virtually impossible task for a script. Collecting that much data would take far too long and wouldn’t make sense for our small scale app. 
Our solution was to filter the region to Ireland only. Although this approach is quite heuristic as a user might scan an item from another country, the vast majority of users will be scanning Irish products.
<br />
<br />
<br />
In terms of the information we extracted for each product, we chose the Name , Brand , Barcode number, image url and its descriptors. 

<br className="" />
<br />
<br />
<h3 className="font-bold text-2xl">Categorizing products</h3>
Another huge problem we faced was identifying what food category a product fell into. Categorizing products is a large part of our app as we are supplying users with information about an item's shelf life and how to tell if it's still safe to consume. We’re also supplying users recipes they can make based on the items category. This meant we had to be able to identify a product’s category with a high level of accuracy.

Open food facts provided a list of descriptors for each product however the layout is very inaccurate. One insight we did make was that the list of descriptors defining the food would normally get more specific the further down it was eg. Dairy Gold butter : 
















However this was not the case for quite a few products eg:
Heinz mayonnaise
[ 'en:condiments', 'en:fats', 'en:mayonnaises' .'en:sauces', ],

In order to overcome this issue, we decided to extract multiple different categories for each product. The item at the bottom of the list would be the primary category, the next two above it would be the secondary categories and the rest of the categories would fall into the all categories field. This means that if a category is too niche or too vague, we have other categories to choose from which reduces our chance of error.

 </t>
  </div>



    </div>
  );
}

  

export default App
