import mongoose from "mongoose";

const Userschema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    fullname: {
        type: String,
        required:true,
    },
}, {timestamps: true}
);

const User = mongoose.model("User", Userschema);

export default User;