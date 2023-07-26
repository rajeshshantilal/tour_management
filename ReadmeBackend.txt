step-1
type nul > index.js
npm init -y
npm install express
npm i -D nodemon
npm i mongoose
npm i mongodb
npm i cookie-parser
npm i bcrypt  
npm install bcryptjs --save // pswd hide krne k liye
npm i dotenv
npm i cors / when we connect frontend to backend
npm i jsonwebtoken / npm install jsonwebtoken
npm i nodemailer / when we forget our pswd that time reset pswd and send a otp mail(this package is not install in this project)

step-2
in package.json
"scripts": {
    "start": "node index.js",
    "server": "nodemon index.js"
  },
  "type":"module"

mongoDB server id RajeshShantilal, pswd- Rajesh@1256 ye pswd dalna hai

------------------------------------------------Common Code------------------------------------------------
step-3
import express  from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from 'cors';



dotenv.config()
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res)=> {
    res.send('api is working yes');
});


//Database connection
mongoose.set("strictQuery", false);
const connect = async()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log('MongoDB database connected');
    } catch (err) {
        console.log('MongoDb database connection failed')
    }
};

//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());



app.listen(port, ()=> {
    connect();
    console.log(`Server listening at http://localhost:${port}`);
});

step-4
A. controller
    1. create controller
    2. create routes
B. go in index.js file
    1. import file (jiska controller or routes bnana hai)
    2. create middleware (ussi file ka jiska route bnna hai)

step-5
create API (for url)

step 6
1.ab create userConroller
2. users.js in routes

///////////////////////////////////////////////////////////////////////////////////////////////////////////

4th part video starting frontent 
create hooks folder in useFetch
2nd step utils
config.js (iseme base url bna rhe hai api ka)
3rd step components mai gye FeaturedTourList.jsx m gye
1. import kiya useFetch
2. import BASE_URL (for API)

4th step
go in TourCard.jsx chnge id to _id

5th step 
go in searchBar.jsx
1. import { BASE_URL } from "../utils/config.js";
2. import { useNavigate }

6th step
go in page->SearchResultList.jsx
1. import CommonSection
step 7th
create context folder 
create AuthContext.js file

7th step
created about page by me it is not in the youtube video
1. create About.jsx page
2. go in index.js page
A. import the about page, 
B. create middleware for about page
3. go in Routers.js file
create Routes for about page


