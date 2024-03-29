const   Student = require('../models/modelStudent')
const mongoose = require('mongoose')
//get all 
const getStudent = async(req,res)=>{
    const stu = await Student.find({}).sort({cratedAt :-1})

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
const  createStudent =async (req,res)=>{
    const {name,nic,dob,email, contact_no,address,date,scheduled_to,course,batch} = req.body
    
    try{
      const cms = await Student.create({name,nic,dob,email,contact_no,address,date,scheduled_to,course,batch})
      res.status(200).json(cms)
    }catch(error){
        res.status(400).json({error:error.message})
    }
    
} 


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


module.exports = {
    createStudent,
    getStudent,
    getsinglestudent,
    deleteStudenet,
    updateStudnet
}