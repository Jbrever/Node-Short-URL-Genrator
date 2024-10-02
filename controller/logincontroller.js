const auth_model = require('../model/signin-model');
const {v4 : uuidv4} = require('uuid');   // before JWT
const {setuserid} = require('../service/auth');

async function login(req,resp){
    try{
        resp.status(200).render("login");
    }catch(err){
      console.log("redirect login form error " ,err);
    }   
}

async function logindata(req,resp){
    try{
       let email = await req.body.email;
       let password = await req.body.password;
       let result = await auth_model.findOne({email:email , password:password});
       if(!result){      // if result is not null
        resp.redirect('/signin');
       }

       let sessionid = uuidv4();      // before JWT
       setuserid(sessionid , result); // before JWT
       resp.cookie('uid',sessionid);  // before JWT

    // let token = setuserid(result);
    // resp.cookie('uid', token);

       resp.redirect("/");
    }
    catch(err){
        console.log("login error ",err);
    }
}


module.exports = {login , logindata};
