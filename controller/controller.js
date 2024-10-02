const model = require('../model/model');
const shortid = require('shortid');

async function allurl(req,resp){
    let result = await model.find({createdBy:req.user._id});
    console.log('ssssssssssssssssss', result);
    resp.render('home',{
        result
    });
}

async function urlform(req,resp){
     try{
        resp.status(200).render('urlmaker');
     }catch(err){
        console.log('error' , err);
        resp.status(404).send(" not found ");  
     }
}


async function createurl(req,resp){
    try{
        
    let body = req.body;
    if(!body){
        resp.send('please enter URL');
    }
    let id = shortid.generate();
    await model.create({
       shortURL : id,
       redirectURL : body.url,
       createdBy : req.user._id
    })
    let result = await model.findOne({shortURL:id})
    resp.status(201).render('shortURL',{
        data : [result]                 // result named variable output come in object form so i just converted into array of objects by [] sqare bracket beacuse in ejs file forEach loop can only iterate array but i can also use for in loop to iterate object 
    });
    }catch(err){
        console.log( 'error --> ',err)
    }
}

async function fetchurl(req,resp){
    try{
        let shorturl = req.params.shorturl;
        let result = await model.findOne({shortURL:shorturl});
        
        if(result){
            console.log('result ssss-> ',result);
            resp.redirect(result.redirectURL);
        }
        else{
            resp.status(404).send('url not found');       
        }
        
    
    }catch(err){
        console.log("error ->>>>" , 'err');
        resp.status(500).send('server problem');
    }
    }






module.exports = {allurl , urlform , createurl , fetchurl};