import express from 'express'
import mongoose from 'mongoose'
import cors from "cors"
import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === 'production' });

import bodyParser from 'body-parser';

//Importing Config Services
import { config } from './config.js'
import { returnError } from './src/exception/errorHandler.js';

//Importing Routes
import userLoginRoutes from './src/routes/userLoginRoutes.js'
import userRegisterRoutes from './src/routes/userRegisterRoutes.js'

//defining port
const port = process.env.PORT || 8000

const app = express()
app.options("*", cors({ origin: '*', optionsSuccessStatus: 200 }));
app.use(cors({ origin: "*", optionsSuccessStatus: 200 }));
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//connecting db
mongoose.connect(config.connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`Connected with ${config.connectionString}`)
    })
    .catch((err) => {
        console.log(err)
    })


app.get('/admin', (req, res) => { res.send('Hello World, from express.') });

app.use('/user', userLoginRoutes)
app.use('/user', userRegisterRoutes)


app.use(returnError);

app.listen(port, () => {
    console.log(`Server started at ${port}`)
})