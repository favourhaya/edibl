import { useState } from 'react'

import './App.css'
import { Router } from 'react-router'

function Week4() {
  const [count, setCount] = useState(0)

  return (
    <div className=" bg-gray-200 w-screen h-screen absolute overflow-hidden flex justify-center ">


  <div className=" bg-white  w-2/3 md:w-2/5  p-5 mt-2 overflow-scroll">
  
<h1 className='text-center text-7xl'>Edibl</h1>
 
 <h2 className=" p-5  mt-5 text-3xl">Week 4</h2>
 <t className="p- text-md">
  <h3 className='font-bold text-2xl'>Recipe API-</h3>
One of the main objectives for this week is to set up a working recipe with the users’ saved ingredients inside their pantry. 
We had 3 choices for our recipe api that being: Spoonacular, Edamam, TheMealDb. Each of these provided similar features that being, using ingredients and getting meals/recipes back with those ingredients.

Spoonacular: Free plan which allows for 50 recipe calls per day and offers a really wide amount of recipes. It accepts a lot of different ingredients which works in our favour too. Easy to use API and helpful website.

Edamam: Offers a free plan which actually allowed for more requests but was set monthly, also a wide amount of recipes and ingredients. Fairly easy intuitive api calls. Didn't offer 

TheMealDb: Free of charge, quite limited in terms of functionality compared to other 2. Searching by multiple ingredients was not a part of the free plan which was vital to our project. 

Settled on Spoonacular as it was most intuitive and also offered a decent free plan for testing purposes. Although if the app was to be made public we would choose Edamam as it allows for much more calls monthly and is the same price as Spoonacular. 

<br />
<br />
<br />
  <h3 className='font-bold text-2xl'>How it works:</h3>
  A call is made to Spoonacular with all of the users saved items inside of their pantry. Spoonacular then processes the request and filters recipes which contain most of the provided ingredients. It then sends back 3 recipes which most match the provided items. It sends information with the recipe name, recipe id, image, instructions, ingredients, cooking time, servings. There is also much more info provided if needed later on. We then display the recipe name and basic info in the recipes page. The user can then click on the recipe to find out more information on each given recipe such as detailed instructions. 

<br />
<br />


<h3 className="font-bold text-2xl">Why we chose 3 recipes per call</h3>
This was for testing purposes as it wouldn't waste too much tokens compared to our planned 6, when the majority of the testing is complete it will be changed.


<br />
<br />
<br />
<h3 className="font-bold text-xl">Problems:</h3>
But the issue which we soon found is that it will always give the same 3 recipes if given the same ingredients, this will be changed in the future updates.

<br />
<br />

<h3 className="font-bold text-xl">Database expansion </h3>

Lastly in week 5 we decided to expand our product  database by 3 thousand entries. We altered the api to only include products sold in the uk. This helped diversify the database and further increase our product coverage.




<br />
<br />



<h3 className="font-bold text-xl">Why didn't end up going for Redis for storing user food data</h3>

Initially Redis was meant to be used for push notifications to alert users of upcoming expiry dates 
of food This was prior to learning about expo’s great built in libraries which included expo-notifications. 
This allowed for much easier implementation of notifications and once again didn't require a server to run the Redis database. 
They are not actually push notifications as they are sent from the user's phone who has the app instead of using a server to send the notification. 
This has another advantage which is being able to send the notifications while offline.






<br />
<br />


<h3 className="font-bold text-xl">Future Additions: </h3>
Would also like to prioritise the items closest to expiry rather than taking every item at the same value(some more important than others)

<br />
<br />

 </t>
  </div>



    </div>
  );
}

  

export default Week4
