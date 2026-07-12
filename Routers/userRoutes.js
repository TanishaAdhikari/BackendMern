import{ Router } from 'express';
import User from '../schema/userSchema.js';

let userRoutes = Router();

userRoutes
.route("/")
.post(async(req,res,next)=>{
//postman lai dina pare res lina pare 
/* send data from postman
get data sent by postman
store data in user table  */
try {
    let result = await User.create(req.body);
    res.json({
    success: true,
    message: "User created successfully", //yesley  direct postman ma open huncha
    result: result,
})
} catch (error) {
    res.status(400).json({
        success: false,
        error: error.message
    });
}
let result = await User.create(req.body); //try catch garna parcha kina bhane data create garna garda error auna sakcha
})
.get(async(req,res,next)=>{

    try {
        let result = await User.find();
        res.json({
            success: true,
            message: "Users found successfully",
            result: result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        }); 
    }

})

userRoutes
.route("/:id")
.get(async(req,res,next)=>{
    try {
        let result = await User.findById(req.params.id);
        res.json({
            success: true,
            message: "User found successfully",
            result: result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
    // console.log(req.params.id);
})
.patch(async(req,res,next)=>{
 try {
    let result = await User.findByIdAndUpdate(req.params.id,req.body,{new: true});
    res.json({
        success: true,
        message: "User updated successfully",
        result: result
    });
 } catch (error) {
    res.status(400).json({
        success: false,
        error: error.message
    });
 }
})
.delete(async(req,res,next)=>{
 try {

    let result =await User.findByIdAndDelete(req.params.id);
    res.json({
        success: true,
        message: "User deleted successfully",
        result: result
    });
} catch (error) {
    res.status(400).json({
        success: false,
        error: error.message,
    });
}
});

export default userRoutes;