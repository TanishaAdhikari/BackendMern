console.log("Hello Welcome to backend");
/* 
make express application 
attach port to it */
import cors from "cors";
import express from "express"
import { json } from "express";
import firstRoute from "./src/routes/firstRoutes.js";
import productRoutes from "./src/routes/productRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import schoolRoutes from "./src/routes/schoolRoutes.js";
import pickleRoutes from "./src/routes/pickleRoutes.js";
import mongoose from "mongoose";
let app = express();

app.listen(8000,()=>{
    console.log("server is running on port 8000");
    mongoose.connect("mongodb://localhost:27017/cosmos");
});
app.use(cors());
app.use(json());  //makes our backend to take data from postman or frontend
//app.use(firstRoute);
app.use("/product",productRoutes);
app.use("/user",userRoutes);
app.use("/school",schoolRoutes);
app.use("/pickle", pickleRoutes);

/*
localhost:8000, post => "a"
loclhost:8000, get =>"b"
loclhost:8000, patches =>"c"
loclhost:8000, delete =>"d"

*/

app.post("/",(req, res,next)=>{
    console.log("a")
})
app.get("/",(req, res,next)=>{
    console.log("b")
});
app.patch("/",(req, res,next)=>{
    console.log("c")
});
app.delete("/",(req, res,next)=>{
    console.log("d")
});

app.get("/product",(req, res,next)=>{
        console.log("Read all products");
 });

app.post("/product/car",(req, res,next)=>{
 console.log("I am car")
 });

 /* Schema
 routes
 index */

