const   Student = require('../models/modelStudent')

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
    const {name,nic,dob,email, contact_no,address,date,course} = req.body
    
    try{
      const cms = await Student.create({name,nic,dob,email,contact_no,address,date,course})
      res.status(200).json(cms)

      const existingno = await User.findOne({ contact_no });
		if (existingno) {
			return res.status(400).json({ error: "Phone Number is already taken" });
		}
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: "Invalid email format" });
        }
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
    deleteStudenet,
    updateStudnet,
    getStudentCount
}