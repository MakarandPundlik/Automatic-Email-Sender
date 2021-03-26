const express = require('express');
const cors = require('cors');
const router = express.Router();
const nodemailer = require('nodemailer');
const bodyparser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors({
    origin:true,
     credentials:true
   }));
   
//deprecation warning
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());

const port = process.env.port||3001;
app.listen(port,()=>console.log(`listening to the port ${port}...`));

//setting up the nodemailer
const contactEmail = nodemailer.createTransport({
    service:'gmail',
    host:"blogpost.example.com",
    port:465,
    secure:true,
   auth:{
      user:"",
      pass:""
   }
});

contactEmail.verify((error)=>{
    if(!error) console.log("Ready to send...");
    else console.log(error);
});


//listen to the request
app.use("/",router);

//setting up the headers
router.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version,Set-Cookie, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
   res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS"); 
   res.header("Content-Type","application/json");
   res.header("Access-Control-Allow-Credentials", true);
    next();
});



router.post("/contact",(req,res)=>{
    const {email,name} = req.body;
    console.log(req.body);
    const mail = {
        from:"blogpost.example@gmail.com",
        to:email,
        subject:"Welcome to BlogPost community ",
        html:`<p>Welcome to BlogPost community <h3>${name}</h3></p>`
    }

    contactEmail.sendMail(mail,(err)=>{
        if(!err) {
            console.log("Email sent successfully...");
            console.log(process.env.user,process.env.pass);
            return res.json({name,email});
        }
        else console.log(err);
    })
    //return res.json({msg:"something went wrong"});
});
