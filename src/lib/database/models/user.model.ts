import { model, models, Schema, Types } from "mongoose";

const UserSchema = new Schema({
    clerkId: { 
        type: String, 
        required: true,
        unique: true,
    },
    email: { 
        type: String, 
        required: true,
        unique: true,
    },
    userName: { 
        type: String, 
        required: true,
        unique: true,
    },
    photo: { 
        type: String, 
        required: true,
    },
    firstName: { 
        type: String, 
    },
    lastName: { 
        type: String,
    },
    planId: { 
        type: String,
        default: 1,
    },
    creditBalance: { 
        type: Number,
        default: 10,
    },
});

const User = models?.image || model('User', UserSchema);

export default User;