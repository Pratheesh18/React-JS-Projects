const Student = require("../models/StudentModel");


const getAllStudents = async (ctx) => {
    try{
        const students = await Student.find();
        ctx.body = students;
    }catch(error){
        ctx.throw(500,error);
    }
};


const createStudent = async (ctx) => {
    try{
        const {name , class : studentClass , age} = ctx.request.body;
        const student = new Student({name , class : studentClass , age});
        await student.save();
        ctx.body = student;
    }catch(error){
        ctx.throw(500 , error);
    }
};




const updateStudent = async (ctx) => {
    try{
        const {id} = ctx.params;
        const {name , class:studentClass , age} = ctx.request.body;
        const student = await Student.findByIdAndUpdate(
            id , 
            {name , class : studentClass , age},
            {new : true}
        );
        ctx.body = student;
    }catch(error){
        ctx.throw(500 , error);
    }
};

const deleteStudent = async (ctx) => {
    try{
        const {id} = ctx.params;
        await Student.findOneAndDelete(id);
        ctx.body = "Student Deleted Successfully";
    }catch(error){
        ctx.throw(500,error)
    }
};


module.exports = {
    getAllStudents,
    createStudent,
    updateStudent,
    deleteStudent
};

