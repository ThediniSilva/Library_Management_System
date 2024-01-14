import { Router } from "express";
import { StudentModel } from "../models/student.js";

const router = Router();

// Route for saving a new student
router.post('/', async (request, response) => {
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
router.get('/', async (request, response) =>{
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
// router.get('/:id', async (request, response) =>{
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
router.put('/:id', async (request, response) =>{
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
router.delete('/:id', async (request, response) =>{
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

export default router;
