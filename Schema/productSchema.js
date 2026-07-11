import{Schema,model} from 'mongoose'
let productSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
    },
    description: {
        type: String,
    },
});

let Product= model("Product", productSchema);

export default Product; 

//database ra backend connect gara