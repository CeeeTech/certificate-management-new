const   Batch = require('../models/modelCourse')
const mongoose = require('mongoose')
//get all 
const getCourse = async(req,res)=>{
    const batch = await Batch.find({}).sort({cratedAt :-1})

    res.status(200).json(batch)
}

//get a single
const getsingCourse = async(req,res)=>{
    const  {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"no such  "})
    }
    const batch = await Batch.findById(id)

    if(!batch){
        return res.status(400).json({error:"no such  "})
    }
    res.status(200).json(batch)
}


// create new student
const  createCourse =async (req,res)=>{
    const {courseName,courseId,description,duration} = req.body
    
    try{
      const cms = await Batch.create({courseName,courseId,description,duration})
      res.status(200).json(cms)
    }catch(error){
        res.status(400).json({error:error.message})
    }

}
    
//delete 
//update 



module.exports = {
    createCourse,getCourse,getsingCourse
}