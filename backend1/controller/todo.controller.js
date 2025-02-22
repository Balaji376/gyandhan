const Task = require("../models/todo.model");

const create =async(req, res)=>{
    const {task, priority,status}=req.body
    try{
        const taskCreated = await Task.create({task, priority,status})
        res.status(200).json({message : 'succesfully created',taskCreated})

        
    }catch(err){
        console.log(err)
    }

}


const update=async(req, res)=>{
    // const {task, priority,status}=req.body
    try{

        let updatedata=await Task.findByIdAndUpdate({_id:req.params.id},req.body)

        res.status(200).json({message : "Data",updatedata})


    }catch(err){
         console.log('something went wrong' ,err)
    }
}

const deletebyid=async(req, res)=>{
    // const {task, priority,status}=req.body
    try{

        let deletedata=await Task.findByIdAndDelete({_id:req.params.id})

        res.status(200).json({message : "Data",deletedata})


    }catch(err){
         console.log('something went wrong' ,err)
    }
}


const getDataF=async(req,res)=>{
    try{
      let getData=await Task.find()
      res.status(200).json(getData)
    }catch(err){
        console.log(err)
    }

}


const getDatabyid=async(req,res)=>{
    try{
      let taskget=await Task.find({_id:req.params.id})
      res.status(200).json(taskget)
    }catch(err){
        console.log(err)
    }

}

module.exports={create,update,deletebyid,getDataF,getDatabyid}


