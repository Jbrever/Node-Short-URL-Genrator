const mongodb = require('mongoose');

const auth_schema = new mongodb.Schema({
        name :{
            type:String,
            required : true
        },
        email :{ 
            type:String,
            required :true,
            unique:true
        },
        password:{
            type:String,
            required:true
        }
    
})

const auth_model = mongodb.model('auth' , auth_schema);

module.exports = auth_model;


