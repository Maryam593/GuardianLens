import mongoose from "mongoose";

const connectDB = async() => {
 await mongoose.connect(`mongodb://localhost:27017/GuardianLens`).then(()=> {
    console.log('DB is connected')
 }).catch((error)=> {
    console.log("Something is wrong" + error)
 })
}
export default connectDB