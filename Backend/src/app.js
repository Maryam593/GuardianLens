import express from "express"
import connectDB from "./config/config.js";
import AllRoutes from "./Route/index.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"
dotenv.config();
const myApp = express();
const port = 3000
myApp.use(express.json())
myApp.use(cookieParser())
myApp.use(cors({
    origin: "http://localhost:5173",  // Replace with your frontend URL
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true
}));

myApp.use(AllRoutes)

connectDB()
myApp.listen(port, ()=> {
    console.log(`App is working fine on port ${port}`)
})