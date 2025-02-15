import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'
const UserSchema = new mongoose.Schema({
    FullName : {
        firstName : {
            type : String,
            require:true
        },
        lastName : {
            type : String
        }
    },
    email : {
        type : String,
        require : true, 
        uniqiue : true
    },
    password : {
        type : String, 
        require: true,
        select : false
    }
})
UserSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({id : this._id}, process.env.SECRET_KEY, {expiresIn: '24h'})
    return token
}
UserSchema.methods.comparePassword= async function (password) {
    return await bcrypt.compare(password, this.password)
}
// hashedpassword
UserSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
  };
const UserAuthModel = mongoose.model ("User Authentication", UserSchema)

export default UserAuthModel;