const   Student = require('../models/modelStudent')
const mongoose = require('mongoose')
//get all 
const getStudent = async(req,res)=>{

    const stu = await Student.find({}).populate({path:'course', select:'courseName'}).sort({cratedAt :-1})
  
    res.status(200).json(stu)
}

//get a single
const getsinglestudent = async(req,res)=>{
    const  {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"no such  "})
    }
    const stud = await Student.findById(id)

    if(!stud){
        return res.status(400).json({error:"no such  "})
    }
   
    res.status(200).json(stud)
}


// create new student

const createStudent = async (req, res) => {
    const { name, nic, dob, email, contact_no, address, date, course } = req.body;

    try {
        // Check if email or contact number already exist in the database
        const existingEmail = await Student.findOne({ email });
        const existingContact = await Student.findOne({ contact_no });

        if (existingEmail) {
            return res.status(400).json({ error: "Email is already taken" });
        }

        if (existingContact) {
            return res.status(400).json({ error: "Contact Number is already taken" });
        }

        // Create new student if email and contact number are unique
        const newStudent = await Student.create({ name, nic, dob, email, contact_no, address, date, course });
        res.status(200).json(newStudent);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



//delete

const deleteStudenet = async (req,res)=>{
    const  {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"no such  "})
    }
    const stud = await Student.findOneAndDelete({_id: id})
    if(!stud){
        return res.status(400).json({error:"no such   "})
    }
    res.status(200).json(stud)
}


//update 
const updateStudnet =  async (req,res)=>{
    const  {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"no such  "})
    }
    const stud = await Student.findOneAndUpdate({_id: id},{
        ...req.body
    })
    if(!stud){
        return res.status(400).json({error:"no such   "})
    }
    res.status(200).json(stud)

}
// Get count of registered students
const getStudentCount = async (req, res) => {
    try {
        const count = await Student.countDocuments();
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    createStudent,
    getStudent,
    getsinglestudent, 
    updateStudnet,
    getStudentCount,
    deleteStudenet
}