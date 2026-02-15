import { useState } from 'react'

import './App.css'
import { Router } from 'react-router'

function Week3() {
  const [count, setCount] = useState(0)

  return (
    <div className=" bg-gray-200 w-screen h-screen absolute overflow-hidden flex justify-center ">


  <div className=" bg-white  w-2/3 md:w-2/5  p-5 mt-2 overflow-scroll">
  
<h1 className='text-center text-7xl'>Edibl</h1>
 
 <h2 className=" p-5  mt-5 text-3xl">Week 3</h2>
 <t className="p- text-md">
  <h3 className='font-bold text-2xl'>Barcode and backend functionality.</h3>
In week 3 we connected the barcode scanner function to our backend server. When an item was scanned, the barcode number was saved and sent to our server in terms of an api call. This number was queried in our database to check if it was in our product database, if yes then it’s information would show up.

<br />
<br />
<br />
  <h3 className='font-bold text-2xl'>
Manually adding food to the database.
</h3>
In the case of an item not being readable or not being in our product database, we decided to allow users to manually add the information about the product.
<br />
<br />


A small problem arised from this as we needed to figure out how to let users input the products’ category in order to get its shelf life information.
 Allowing for users to type in a category directly could lead to unexpected inputs or inputs which are too broad or specific.
We decided to provide a selection field instead containing all of the available options for categories. Users are able to find the category
 of best fit using search by scrolling through.
  
<br />
<br />


<br />
<br />
<br />
<h3 className="font-bold text-2xl">Basic user interface</h3>
We developed a simple app ui in this stage too for ease of testing and navigation. It was essentially just a homepage with 4 buttons. Once for adding food to the database. 
Another one for checking your pantry and all the food available there and the last two were about getting recipes recommendations and viewing your previously made recipes. 
The ui had a basic green and white colour scheme however we will polish it later as functionality is our priority.


<br />
<br />
<br />
<h3 className="font-bold text-xl">Why didn't end up going for Redis for storing user food data</h3>
Initially we had decided that we will be using Redis as our database for the user as it was fast and 
reliable. But once we had thought more and explored other solutions we realised this was not the right 
approach for our project. We wanted the app to be able to be used offline which was not possible with 
Redis as it would need a server to run. We hadn't considered storing the data for each user on their phone 
and after reconsidering we chose to use expos SQLite as the storage of personal user information such as their scanned foods.

<br />
<br />

<h3 className="font-bold text-xl">Why didn't end up going for Redis for storing user food data</h3>

Initially we had decided that we will be using Redis as our database for the user as it was fast and reliable. 
But once we had thought more and explored other solutions we realised this was not the right approach for our 
project. We wanted the app to be able to be used offline which was not possible with Redis as it would need a 
server to run. We hadn't considered storing the data for each user on their phone and after reconsidering we 
chose to use expos SQLite as the storage of personal user information such as their scanned foods.






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


<h3 className="font-bold text-xl">How Food Data is stored</h3>
Once we decided on using Expo-SQLite for the users personal database we began to write the schema for the food item and its attributes it will have.
<br />
<br />

Issues faced: 
<br />

Future additions: Make the different save locations such as fridge, freezer, pantry each with different safety windows

<br />
<br />

<h3 className="font-bold text-xl">How Notifications work</h3>
Firstly had to get user permissions in order to send notifications, same process as with camera permissions so it wasn't much work. Expo-notifications was in general, quite simple to work with but also offered a good amount of 
customisation. We ended up sticking with quite a basic notification as that's all our app requires for now. Used a test notification to get functionality correct before adding more information and making more complex functions. 
Daily expiry checks at 9am and if a food had less than 3 days left before its safety window was out.


<br />
<br />

<h3 className="font-bold text-xl">Future additions</h3>

 Daily recipe suggestions notification based on the food in users pantry
Provide a please throw away notification when a food has reached the end of its safety window and delete it from the users pantry
Allow users to choose when they would like to receive the notifications and also how early in the safety window should a reminder be sent(customisation)


 </t>
  </div>



    </div>
  );
}

  

export default Week3
