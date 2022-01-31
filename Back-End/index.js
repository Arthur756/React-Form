import express, { Router } from "express";
import mongoose from 'mongoose';
import route from './route/routes'

const app = express();


app.use('/users', route);

const PORT = 8000;
const URL = 'mongodb+srv://Arthur756:<310707Aa>@alunodb.xw3ik.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


mongoose.connect(URL, { useNewUrlParser: true}).then(()=>{
    app.listen(PORT, () => {
        console.log('Server is running on Port $[PORT]');
    });
}).catch(error => {
    console.log('Error:', error.message)
})