import{ Router } from 'express';
import School from '../schema/schoolSchema.js';

let schoolRoutes = Router();

schoolRoutes
.route("/")
.post(async(req,res,next)=>{
//postman lai dina pare res lina pare 
/* send data from postman
get data sent by postman
store data in school table  */
try {
    let result = await School.create(req.body);
    res.json({
    success: true,
    message: "School created successfully", //yesley  direct postman ma open huncha
    result: result,
})
} catch (error) {
    res.status(400).json({
        success: false,
        error: error.message
    });
}//try catch garna parcha kina bhane data create garna garda error auna sakcha
})
.get(async(req,res,next)=>{

    try {
        let result = await School.find();
        res.json({
            success: true,
            message: "School found successfully",
            result: result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        }); 
    }

})

schoolRoutes
.route("/:id")
.get(async(req,res,next)=>{
    try {
        let result = await School.findById(req.params.id);
        res.json({
            success: true,
            message: "School found successfully",
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
    let result = await School.findByIdAndUpdate(req.params.id,req.body,{new: true});
    res.json({
        success: true,
        message: "School updated successfully",
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

    let result =await School.findByIdAndDelete(req.params.id);
    res.json({
        success: true,
        message: "School deleted successfully",
        result: result
    });
} catch (error) {
    res.status(400).json({
        success: false,
        error: error.message,
    });
}
});

export default schoolRoutes;