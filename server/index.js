import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/users.js'
import commentRouter from './routes/comments.js'
import videoRouter from './routes/videoes.js'
import authRouter from './routes/auth.js'
import cookieParser from 'cookie-parser';



const app = express();
dotenv.config()
const port = process.env.PORT || 5000

app.use(cookieParser())
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/comments', commentRouter)
app.use('/api/videos', videoRouter)

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Somthing went wrong";
    return res.status(status).json({
        success: false,
        status,
        message
    })
})


const connect = () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("Coneccted to DB");
    }).catch((err) => {
        console.log(err);
    })
}

app.listen(port, () => {
    connect()
    console.log(`Server connected to ${port}`);
})