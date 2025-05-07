const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const app=express();
const port=8000;
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:27017/crud")
 .then(()=>{console.log("connectes successfuly")})
 .catch((err)=>{console.log(err)})
const crudSchema=new mongoose.Schema({
    name:String,
    sub_name:String,
});
const Task=mongoose.model("Task",crudSchema);
app.post("/task",async(req,res)=>{
    const task=new Task(req.body);
    await task.save();
    res.send("data add succesfully");
});
app.get("/task",async(req,res)=>{
    const task=await Task.find();
    res.json(task);
    
});
app.put("/task/:id",async(req,res)=>{
    const{name,sub_name}=req.body;
    const updatetask= await Task.findByIdAndUpdate(req.params.id,{name,sub_name});
    res.json(updatetask);
    
});
app.delete("/task/:id",async(req,res)=>{
    await Task.findByIdAndDelete(req.params.id);
    res.send("data deleted successfully")
});
app.listen(port,()=>{
    console.log(" server listen succesfully")
});
