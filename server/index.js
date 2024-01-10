//ES6 model 
import express from 'express';
import  Mongoose  from 'mongoose';   
import dotenv from 'dotenv';
import roleRoute from './routes/role.js';
import authRoute from './routes/auth.js';
//express app
const app = express();
// dotenv config
dotenv.config();


// middileware created 
app.use(express.json());
//  api endpoint From routes folder role.js
app.use('/api/role',roleRoute);
app.use('/api/auth',authRoute);
// db connection
const connectMongoDB = async()=>{
    try {
        await Mongoose.connect(process.env.MONGO_URL); //mongo_url form .env folder 
        console.log("Database Connected Successfully") // status for DB
    } catch (error) {
      throw error;  
    }
}
// port running server 
 app.listen(3000,()=>{
    connectMongoDB();
    console.log('Server is running on port 3000');
 }) 