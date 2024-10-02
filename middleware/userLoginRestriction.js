const {getuserid} = require('../service/auth');
async function userloginrestriction(req , resp , next){
  // console.log('request usn- >>>>>>>>>>>>>>>' , req)

  console.log(req.cookies);
  let usercookieid = await req.cookies?.uid;
  console.log('cookie is ->>>>>>>>' , usercookieid);
  if(usercookieid == undefined) return resp.redirect('/login');
  
  // console.log('request ------>' , req);

  let findIdInMap = await getuserid(usercookieid);
  if(!findIdInMap) return resp.redirect('/login');
  
  req.user = findIdInMap;   // "user" it's not pre-build key , it's created by programmer

  
  next();

}


module.exports = {userloginrestriction};



