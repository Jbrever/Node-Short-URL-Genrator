const auth_model = require('../model/signin-model');

async function signin(req,resp){
      try{
          resp.status(200).render("signin");
      }catch(err){
        console.log("redirect signin form error " ,err);
      }   
}

async function createauth(req,resp){
    try{
        let body = await req.body;
        if(!body){
            resp.status(404).json({msg:"required all field"})
        }
        let result = await auth_model.create({
            name:body.name,
            email:body.email,
            password:body.password
        })
        resp.redirect('/');
    }catch(err){
        console.log("sigin error " ,err);
    }
}


module.exports = { signin ,createauth};