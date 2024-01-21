import { Router } from "express";
import { StudentModel } from "../models/student.js";

const router = Router();

// Route for saving a new student
router.post('/', async (request, response) => {
    try {
        if (!request.body.name || !request.body.age || !request.body.gender) {
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

// Route for getting all students from the database
router.get('/', async (request, response) => {
    try {
        const createdStudents = await StudentModel.find({});
        return response.status(200).json({
            count: createdStudents.length,
            data: createdStudents
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for getting a single student by ID
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const foundStudent = await StudentModel.findById(id);

        if (!foundStudent) {
            return response.status(404).json({ message: 'Student not found' });
        }

        return response.status(200).json(foundStudent);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for updating a student
router.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        if (!id) {
            return response.status(400).json({ message: 'Invalid ID parameter' });
        }

        if (!request.body.name || !request.body.age || !request.body.gender) {
            return response.status(400).json({
                message: 'Send all required fields: name, age, gender',
            });
        }

        const updatedStudent = await StudentModel.findByIdAndUpdate(
            id,
            {
                name: request.body.name,
                age: request.body.age,
                gender: request.body.gender,
            },
            { new: true, runValidators: true }
        );

        if (!updatedStudent) {
            return response.status(404).json({ message: 'Student not found' });
        }

        return response.status(200).json({ message: 'Student Updated successfully!', data: updatedStudent });
    } catch (error) {
        console.error("Error updating student:", error.message);
        response.status(500).json({ message: 'Internal Server Error' });
    }
});

// Route for deleting a student
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await StudentModel.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Student not found' });
        }

        return response.status(200).json({ message: 'Student deleted successfully!' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
