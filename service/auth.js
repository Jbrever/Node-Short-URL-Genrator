const mapuserid = new Map();  // before using JWT
const jsonwebtoken = require('jsonwebtoken');
const dotenv = require('dotenv')

// Set up Global configuration access
dotenv.config();


async function setuserid(id,user){
  await mapuserid.set(id , user); // before using JWT

//  let token = jsonwebtoken.sign({
//     id : user._id,
//     email : user.email,
//   } , process.env.secret_key)
  
//   console.log('generated token is ----> ', token)
//   return token;
}

async function getuserid(token){
  return await mapuserid.get(token); // before JW

  // if( typeof token !== 'string') return console.log("Token must be in string");

  // try{
  //   if(!token) {
  //     console.error("Token is not provided");
  //     return null;
  //   } 

  //   return  jsonwebtoken.verify(token , process.env.secret_key);
  // }catch(err){
  //     console.log('error as getuserid auth',err);
  // }
}


module.exports = {setuserid , getuserid};