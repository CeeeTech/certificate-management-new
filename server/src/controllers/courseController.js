const   Course = require('../models/modelCourse')
const mongoose = require('mongoose')
//get all 

const getCourse = async(req,res)=>{
    const cms = await Course.find({}).sort({cratedAt :-1})

    res.status(200).json(cms)
}


//get a single
const getsingCourse = async(req,res)=>{
    const  {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"no such  "})
    }
    const Course = await Course.findById(id)

    if(!Course){
        return res.status(400).json({error:"no such  "})
    }
    res.status(200).json(Course)
}


// create new student
const  createCourse = async (req,res)=>{
    const {courseName,courseId,duration,description} = req.body
    
    try{
      const cms = await Course.create({courseName,courseId,duration,description})
      res.status(200).json(cms)
      await Course.save();
    }catch(error){
        res.status(400).json({error:error.message})
    }

}




module.exports = {
    createCourse,getsingCourse,getCourse
}