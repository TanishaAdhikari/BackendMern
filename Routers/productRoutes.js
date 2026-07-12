import {Router} from "express";
import Product from '../schema/productSchema.js';

const productRoutes = Router();

productRoutes
.route("/")
.post(async (req, res,next)=>{
    //console.log("Product bandai xa hai guysss");
    try {
    let result = await Product.create(req.body);
    res.json({
    success: true,
    message: "Product created successfully", //yesley  direct postman ma open huncha
    result: result,
})
} catch (error) {
    res.status(400).json({
        success: false,
        error: error.message
    });
}
})
.get(async(req, res,next)=>{
    //res.json("k xa vaiharu");
    try {
            let result = await Product.find();
            res.json({
                success: true,
                message: "Products found successfully",
                result: result
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                error: error.message
            }); 
        }
    
    });


productRoutes
.route("/:id")
.get(async(req, res,next)=>{
    try {
        let result = await Product.findById(req.params.id);
        res.json({
            success: true,
            message: "Product found successfully",
            result: result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
})
.patch(async(req, res,next)=>{
    try {
        let result = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json({
            success: true,
            message: "Product updated successfully",
            result: result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
})
.delete(async(req, res,next)=>{
    try {
        let result = await Product.findByIdAndDelete(req.params.id);
        res.json({
            success: true,
            message: "Product deleted successfully",
            result: result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});

export default productRoutes;   

/* 
localhost:8000/user, post => create a product
localhost:8000/user, get => read all products

localhost:8000/user/:id, get => read a single product
localhost:8000/user/:id, patch => update a product
localhost:8000/user/:id, delete => delete a product
*/
/* try catch suru ma tya vitra
 re.json garera postman ma print
 await ra async rakhneyy
  */