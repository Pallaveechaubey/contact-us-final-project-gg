import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js'

// inilise dotenv
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDb');
}).catch((err)=>{
    console.log(err);
})
// mongodb+srv://pallaveexchaubey:<password>@april.k7p4edl.mongodb.net/?retryWrites=true&w=majority&appName=april


const app = express();
app.use(express.json());

app.listen(3000,()=>{
    console.log('server listening on port 3000')
});

// api testing ===> user.routes
app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server Error';
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode,
    });
})

