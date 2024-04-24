const   Batch = require('../models/modalBatch')



const getBatch = async (req, res) => {
 
      const Bat = await Batch.find({}).sort({ createdAt: -1 });
      res.status(200).json(Bat);

};
// create new student
const  createBatch =async (req,res)=>{
    const {batch_id,duration,numberOfStudents,startdate, enddate,course} = req.body
    
    try{
      const cms = await Batch.create({batch_id,duration,numberOfStudents,startdate, enddate,course})
      res.status(200).json(cms)
    }catch(error){
        res.status(400).json({error:error.message})
    }
    
} 


module.exports = {
  createBatch,getBatch
}