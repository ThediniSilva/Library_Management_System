import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { StudentModel } from "./models/student.js"; 

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to mern stack tutorial');
});

// Route for saving a new student
app.post('/student', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.age ||
            !request.body.gender
        ) {
            return response.status(400).send({
                message: 'Send all required fields: name, age, gender',
            });
        }

        const newStudent = {
            name: request.body.name,
            age: request.body.age,
            gender: request.body.gender,
        };

        // Use StudentModel instead of student
        const createdStudent = await StudentModel.create(newStudent);
        return response.status(201).send(createdStudent);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});
//Route for get All student from database
app.get('/student', async (request, response) =>{
    try{
        const createdStudents = await StudentModel.find({});
        return response.status(200).json({
            count:createdStudents.length,
            data:createdStudents
        });

    }catch(error){
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});
//======================================================

// //Route for get One student from database id
// app.get('/student/:id', async (request, response) =>{
//     try{

//         const{id} = request.params;
//         const createdStudent = await StudentModel.findById({id});
//         return response.status(200).json(createdStudent);

//     }catch(error){
//         console.log(error.message);
//         response.status(500).send({ message: error.message });
//     }
// });

//============================================================


//Route for update the student 
app.put('/student/:id', async (request, response) =>{
    try{
        if (
            !request.body.name ||
            !request.body.age ||
            !request.body.gender
        ) {
            return response.status(400).send({
                message: 'Send all required fields: name, age, gender',
            });
        }

        const{id} = request.params;
        const result = await StudentModel.findByIdAndUpdate(id,request.body);
        if(!result){
            return response.status(404).json({message:'Book not found'});
        }
        return response.status(200).json({message:'Book Updated successfully!'});
        
    }catch(error){
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for delete the student 
app.delete('/student/:id', async (request, response) =>{
    try{
        
        const{id} = request.params;
        const result = await StudentModel.findByIdAndDelete(id);

        if(!result){
            return response.status(404).json({message:'Book not found'});
        }
        return response.status(200).json({message:'Book deleted successfully!'});

    }catch(error){
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
