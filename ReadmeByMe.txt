Step 1. cd frontend
Step 2. npm install
Step 3. start run
Step 4. go assets 
create components
1. Header-> Header.jsx
2. Footer -> Footer.jsx
2. Layout -> Layout.jsx

Step 5. Go src
create page folder
create router folder
1. page 
Home.jsx
Login.jsx
Register.jsx
SearchResultList.jsx
TourDetails.jsx
Tour.jsx
2. router
Router.js
Create routes(root)
Step 6
Layout.jsx
import and load Header,Routers,Footer
App.js
import and load Layout.jsx

Step 7
Header
Create header.css
Header.jsx
1. import Container,Row,Button
2. import NavLink
3. import logo
4. import header.css
5. logo lgya hai 
https://remixicon.com/ iss website se ja krke
go in header.css
config all css for header logo navbar etc

Step 8
Create shared folder
Subtitle.jsx
create class name etc

Step 9
create styles folder
home.css

Step 10
create SearchBar.jsx in shared folder
create SearchBar.css

Step 11
SearchBar.jsx
import search-bar.css
import Col,Form, etc


step 12 
components->create Featured-tours->FeaturedTourList.jsx
shared -> 
1. Create TourCard.jsx
2. create tour-card.css
[main file components mai create kr rhe hai,
share mai tour card or tour css create kiya hai,
or isko import kr diya com ke FeaturedTourList mai or home.jsx mai ja krke fe file ko import krwa dete hai]

Step 13
src 
create utils folder
avgRating.js isme sara rating ka kam hoga

step14 components
create 
1.image-gallery
2.galleryimages.js

step 15 components
create 
1. Testimonial
2. Testimonials.jsx

step 16 in share folder
create 
1. Newsletter.jsx
2. newsletter.css




go in Home.jsx
import SearchBar


common code jo her page mai apply hota hai

import React from "react";

const Register = () => {
    return <div>Register</div>;
};

export default Register;

========================================Part 2==========================================================
share
create 
1. CommonSection.jsx
2. common-section.css

page -> Tour.jsx mai-> CommonSection ko import kiya

step 2
styles
create tour.css

step3
styles
create tour-details.css

Step 4 

Step 5 
create thankyou page in page
and 1st import thankyou page in router file than create link in routers file
styles-> thank-you.css

styles
create login.css
