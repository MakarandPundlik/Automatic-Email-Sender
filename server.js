const express = require('express');
const cors = require('cors');
const router = express.Router();
const nodemailer = require('nodemailer');
const bodyparser = require('body-parser');

const app = express();
app.use(cors());
//deprecation warning
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());

//listen to the request
app.use("/",router);

router.post("/contact",(req,res)=>{
    const {name,email} = req.body;
    return res.json({name,email});
});
const port = process.env.port||3001;
app.listen(port,()=>console.log(`listening to the port ${port}...`));