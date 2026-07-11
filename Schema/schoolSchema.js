import{Schema,model} from 'mongoose'
let schoolSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    address: {
        type: String,
        required: [true, "Address is required"],
    },
    phone: {
        type: Number,
        required: [true, "phone is required"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
    },
    noOfRooms: {
        type: Number,
        required: [true, "noOfRooms is required"],
    },
});

let School= model("School", schoolSchema);

export default School;
