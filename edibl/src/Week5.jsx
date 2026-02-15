import { useState } from 'react'

import './App.css'
import { Router } from 'react-router'

function Week5() {
  const [count, setCount] = useState(0)

  return (
    <div className=" bg-gray-200 w-screen h-screen absolute overflow-hidden flex justify-center ">


  <div className=" bg-white  w-2/3 md:w-2/5  p-5 mt-2 overflow-scroll">
  
<h1 className='text-center text-7xl'>Edibl</h1>
 
 <h2 className=" p-5  mt-5 text-3xl">Week 5</h2>
 <t className="p- text-md">
  <h3 className='font-bold text-2xl'>Logging in</h3>
Both felt this part of the project would be easy as one of us had previous experience with setting up something similar, that is why we had left logging in and authentication near the end. This actually was somewhat harder than anticipated and faced a couple of issues along the way.
The setup: Used google cloud to authenticate and log users in. More secure than having it saved in our database as the data is never saved, only sent to our app from either google or apple to log the user in.

Problems: The user is stuck on the login screen even after logging in successfully and cannot go anywhere else in the app. Not the intended outcome as the user should be taken to the homepage once logged in. But if the app is closed and then opened the user is logged in and taken to the home page upon entering the app again. The problem was that the user state is not being changed so even if the app receives the correct response the user is stuck on the login screen. Added an additional file which monitors the users current status within the app.
Setting up clients was also a challenge and had to follow a youtube tutorial in order to set everything up correctly. Initially only had apple login working as when a user tried to login using google they would get the following error: 

This was because the webClient was not set up correctly but also hadn't added the email address into the test users. This took quite a while to find the solution online.

Future: Add a feature where if a user is not currently logged in they can only see the log in screen
Had an idea of using a guest login but came to the conclusion that it would be counteractive and wouldn't fit our app.

This was because the webClient was not set up correctly but also hadn't added the email address into the test users. This took quite a while to find the solution online.

Future: Add a feature where if a user is not currently logged in they can only see the log in screen
Had an idea of using a guest login but came to the conclusion that it would be counteractive and wouldn't fit our app.


<br />
<br />
<br />
  <h3 className='font-bold text-2xl'>Revised ui design</h3>
We decided it was time to reconfigure our ui design since a lot of new features and functionality had been added. We had trouble picking a particular colour scheme as we didn't want the ui to look too plain and also didn’t want it to become too visually distracting. After messing around with colours and prototyping we decided to go with a vibrant yet muted selection of 4 colours. These colours appear all throughout the app which maintains visual harmony. 
We also implemented a bottom slider tab. This slider allows for experienced users to navigate through the app more easily. When swiped up users can see food which is soon to expire, recipes to make, and recipes which have been saved by them. 

<br />
<br />


<h3 className="font-bold text-2xl">Naming-final days </h3>
Easy at the start but became confusing after a while due to having many similar names such as food, foodData, Food, getFoods, foodNames.


 </t>
  </div>



    </div>
  );
}

  

export default Week5
