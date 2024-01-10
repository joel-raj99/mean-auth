// es6 model
import mongoose, { Schema } from 'mongoose';

// mongoose schema for database 

const UserSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        username: {
            type: String,
            unique: true,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true,
            unique:true
        },

        profileImage: {
            type: String,
            default: "defaultProfile.jpg", // Default Profile Image if user doesn't upload
            required: true
        },
        isadmin: {
            type: Boolean,
            default: false  // false means it's a normal user and true means it'
        },
        // add role
        roles: {
            type: [Schema.Types.ObjectId],
            required: true,
            ref: "Role"
        }
    },
    {
        timestamps: true
    },
)
export default mongoose.model('user', UserSchema)


