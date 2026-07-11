import { Schema, model} from "mongoose";
let pickleSchema = new Schema({
    name:{
        type: String,
        required: [true, "Name is required"],
    },
    price:{
        type: Number,
        required: [true, "Price is required"],
    },
    quantity:{
        type: String,
        required: [true,"Quantity is required"],
    },
    madeIn:{
        type: String,
        required: [true,"Place is required"],
    },
});
let Pickle = model("Pickle",pickleSchema);
export default Pickle;
