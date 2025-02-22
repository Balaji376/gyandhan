

//schema

const mongoose=require('mongoose')
const tasksSchema=new mongoose.Schema({
    task :{type :String , required: true},
    priority:{type : String , enum :['low' , 'high' ,'medium'],requried: true},
    status:{type: String, enum :['Not Started','Pending', 'Completed'] , default:"Not Started"}
    
})


const Task=mongoose.model('todoList' ,tasksSchema)

module.exports=Task