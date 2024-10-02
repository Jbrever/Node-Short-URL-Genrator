const mongodb = require('mongoose');
const { schema } = require('../../rest api/model/usermodel');

const urlschema = new mongodb.Schema({
    shortURL :{
        type : String ,
        required : true,
        unique:true
    },
    redirectURL : {
        type : String ,
        required : true
    },
    createdBy : {
        type : mongodb.Schema.Types.ObjectId,
        ref :"auths"   // user Database name
    }
}) 
const model = mongodb.model('URL',urlschema);

module.exports = model;