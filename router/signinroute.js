const express = require('express');
const signin_router = express.Router();
const {signin, createauth } = require("../controller/signincontroller");

signin_router.route('/').get(signin).post(createauth);

// function student(fname , lname){
//   this.kname = fname;
//   this.name = lname; 
// }

// student.prototype.heloo = "india";
// let st1 = new student('aka','as');
// let st2 = new student('aka222','a2s');
// let st3 = new student('aka2224','1a2s');


// class stu{
//     constructor(lname,fname,pass){
//        this.lname = lname;
//        this.fname = fname;
//        this.pass = pass;
//     }
//     username(){
//      return `username is-: ${this.fname}`;    
//     }
// }
// class teach extends stu{
//     constructor(lname,fname,pass){
//         super(lname , fname , pass);
//         this.name = lname;
//     }
//     name1(){
//         return this.name;
//     }
// }
// stu.prototype.password = function (){
//    return this.pass
// }
// let st3 = new stu('khan','salman','sallu');
// let st4 = new stu('khan','salman','sallu44');
// let teach1 = new teach('sahil');

// console.log(st3.password());

let arr = ["john","johnny",'jackie',"johnny" ,"john" ,'jackie' ,"jamie" ,"jamie" ,"john", "johnny", "jamie", "johnny" ,"john"];
let obj = {};
let n = 13;
for(let i = 0; i<n; i++){
    if(obj[arr[i]] == undefined){
        obj[arr[i]] = 1;
    }
    else obj[arr[i]]++;

}



console.log(obj);

module.exports = signin_router;