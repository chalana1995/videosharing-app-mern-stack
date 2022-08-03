import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'


const app = express();
dotenv.config()
const port = process.env.PORT || 5000

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