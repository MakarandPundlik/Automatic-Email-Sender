const express = require('express');
const cors = require('cors');
const router = express.Router();
const nodemailer = require('nodemailer');
const bodyparser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
//deprecation warning
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());

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
    const {name,email} = req.body;
    return res.json({name,email});
});

const port = process.env.port||3001;
app.listen(port,()=>console.log(`listening to the port ${port}...`));

//setting up the nodemailer
const contactEmail = nodemailer.createTransport({
    service:'gmail',
    host:"xyx",
    port:465,
    secure:true,
   auth:{
      user:"xyz@gmail.com",
      pass:"xyz"
   }
});

contactEmail.verify((error)=>{
    if(!error) console.log("Ready to send");
    else console.log(error);
})