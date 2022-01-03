const express = require('express')
const app = express()
const monogo=require('./DB_connection')
const student=require('./Schema.js')
monogo('mongodb+srv://tybtest90:testing1122@cluster0.hqfbo.mongodb.net/test');
//Create a user
app.post("/student/:name/:age",(req,res)=>{
const std=new student({name:req.params.name,age:req.params.age})

std.save().
then(data=>{
    console.log(" Saved.")
    res.send(data)
}).
catch(err=>{
    res.send(err)
})})
////////////////

//All Students List
app.get('/student',(req,res)=>{
    all_students=new student();
    student.find({},(err,all_students)=>{
        if(err){
            res.send(err);
        }
        else if(all_students.length==0){
            res.send("No Student record")
        }
        else{
            res.send(all_students.toString())
        }
    })
})
app.listen(3000,()=>{
    console.log("Server is Active")
})