const mongoose = require('mongoose')
//install mongoose-auto-increment package 'npm i --force mongoose-auto-increment'
const autoIncrement=require('mongoose-auto-increment')//For Auto increment
autoIncrement.initialize(mongoose.connection); //intilize connection
const DB_Schema=mongoose.Schema;
const Student=new DB_Schema({
    name:{ 
        type: String,
        min:4,
        max:26,
        required:true,
    },
    age:{ 
        type:Number,
        required:true
    }

})
Student.plugin(autoIncrement.plugin,{model:'Students',field:'_id',startAt:1,incrementBy:1}) //Assign increment filed
module.exports=mongoose.model('Students',Student)