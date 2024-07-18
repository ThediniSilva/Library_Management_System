import express from "express";
import cors from "cors"; 
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { StudentModel } from "./models/student.js"; 
import studentRouter from './routes/studentRouter.js';
import booksRoute from './routes/booksRoute.js';
import ebookRoute from './routes/ebookRoute.js';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS policy
app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
);

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to mern stack tutorial');
});

app.use('/student', studentRouter);
app.use('/books', booksRoute);
app.use('/ebooks', ebookRoute); // Connect eBook routes to server.js

mongoose
    .connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
