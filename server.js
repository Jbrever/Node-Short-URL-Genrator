const express = require('express')
const app = express();
const dotenv = require('dotenv')

// Set up Global configuration access
dotenv.config();

const port = 8000;
const connectionDB = require('./connection/connection');
const router = require('./router/route');
const signin_router = require('./router/signinroute');
const login_router = require('./router/loginroute');
const cookieParser = require('cookie-parser');
const {userloginrestriction} = require('./middleware/userLoginRestriction');


const ejs = require('ejs');
const path = require('path');

connectionDB('mongodb://127.0.0.1:27017/URL-short');

app.set('view engine','ejs');
app.set("views",path.resolve("./views"))

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

app.use('/signin',signin_router);
app.use('/login',login_router);
app.use('/',userloginrestriction,router);


app.listen(port,()=>{
    console.log(`server started at ${port}`);
})

