import{ Schema,model} from "mongoose"; //data k k chaine sabai schema ma garney
let userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],

    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
   
});



let User = model("User", userSchema); //table banako

export default User;
//jaile pani database ma data chai table ko form ma save huncha 