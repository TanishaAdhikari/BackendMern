import { Router } from "express";
import Pickle from '../schema/pickleSchema.js';
const pickleRoutes = Router();

pickleRoutes    
.route("/")
.get(async(req, res,next)=>{
    try {  
        let result = await Pickle.find();
        res.json({
            success: true,
            message: "Pickles found successfully",
            result: result
        });
    } catch (error) {
        res.json({
            success: false,  
            error: error.message
        }); 
    }
})
.post(async(req, res,next)=>{
    try {
        let newPickle = new Pickle(req.body);
        let result = await newPickle.save();
        res.json({
            success: true,
            message: "Pickle created successfully",
            result: result
        });
    }
        catch (error) {
            res.json({
                success: false,
                error: error.message
            });
        }
})
pickleRoutes
.route("/:id")
.get(async(req, res,next)=>{
    try {
        let result = await Pickle.findById(req.params.id);
        res.json({
            success: true,
            message: "Pickle found successfully",
            result: result
        });
    } catch (error) {
        res.json({
            success: false,
            error: error.message
        });
    }
})
.patch(async(req, res,next)=>{
    try {
        let result = await Pickle.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json({
            success: true,
            message: "Pickle updated successfully",
            result: result
        });
    } catch (error) {
        res.json({
            success: false,
            error: error.message
        });
    }
})
.delete(async(req, res,next)=>{
    try {
        let result = await Pickle.findByIdAndDelete(req.params.id);
        res.json({
            success: true,
            message: "Pickle deleted successfully",
            result: result
        });
    } catch (error) {
        res.json({
            success: false,
            error: error.message
        });
    }
});

export default pickleRoutes;  