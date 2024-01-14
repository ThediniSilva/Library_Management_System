import mongoose from 'mongoose';


const studentSchema = mongoose.Schema(
    {
    name : {
        type: String,
        required : true,
    },

    age :{
        type: Number,
        required : true,
    },
    gender:{

        type: String,
        required : true,

    },
},
    {
        timestamps:true,
    }
);
export const StudentModel = mongoose.model('StudentModel',studentSchema);


