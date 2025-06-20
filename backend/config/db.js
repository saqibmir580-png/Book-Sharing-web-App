const mongoose=require('mongoose')
const connectDb=async()=>{
try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('mongodb is connected');
    
} catch (error) {
    console.log('mongodb connection Error',error.message);
    
}
}
module.exports =connectDb