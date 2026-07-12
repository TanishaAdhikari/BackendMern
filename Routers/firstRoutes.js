//make routes
//use that routes at index

import { Router } from "express";

let firstRoute = Router();

firstRoute
.route("/")
.get((req, res,next)=>{
    console.log(req.body);
    console.log("a")
})

.post((req, res,next)=>{
    console.log("b")
})

firstRoute
.route("/job")
.get((req, res,next)=>{
    console.log("c")
})

firstRoute
.route("/:id1/a/:id2")
.get((req, res,next)=>{
    console.log("dynamic params")
    console.log(req.params);
})




/* 
localhost:8000 , get => "a"
localhost:8000 , post => "b"
localhost:8000 , patch => "c"
localhost:8000 , delete => "d"
localhost:8000/job , get => "I get a job"
*/

export default firstRoute;