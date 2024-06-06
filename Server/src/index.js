import Express from 'express';
import Cors from 'cors';
import Axios from 'axios';
import {URL} from 'node:url';
import { error, log } from 'node:console';
import { url } from 'node:inspector';
import Nodemailer from 'nodemailer';
import {MongoClient} from 'mongodb'; 
import Mongoose from 'mongoose';
import multer from 'multer';

const app = Express();
const port = 3000;

//middle wares
app.use(Express.json());
app.use(Cors());

//conection string mongodb
let CONNECTION_STRING = `mongodb+srv://nipunsandeepa:LcKRkRu0fbEo5lbz@cluster0.hurttot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01`;
let database;

//listen to a port
app.post('/api/user/frogetpassword',(req,res)=>{
    const urlParam = new URL(`http://localhost:3000${req.url}`);
    const userObject = urlParam.searchParams;
    
    //Fetch user pass data from url
    const userEmail = userObject.get('useremail');

    database.collection('nodejscollection').find({email:userEmail}).toArray((error,result)=>{
      
      // generating a random number
      const randomValue = Math.floor(Math.random() * (9000 - 1000 + 1)) + 1000;
      
      if(result.length == 1){
        res.send('sende7800');
        sendEmail(userEmail,randomValue);
      }else{
        res.send('notexist4001');
      }
    });
});

app.post('/api/user/register',multer().none(),(req,res)=>{
    const urlParam = new URL(`http://localhost:3000${req.url}`);
    const userObject = urlParam.searchParams;
    
    //Fetch user pass data from url
    const userEmail = userObject.get('useremail');
    const userPassword = userObject.get('password');

    database.collection('nodejscollection').insertOne({
      email:userEmail,
      password:userPassword
    });
    res.send('reg40010');
});

app.delete('/api/user/delete',multer().none(),(req,res)=>{
  database.collection('nodejscollection').deleteOne({
    email:'supun@gmail.com',
  });
  res.send('Data Delete SuccessFully');
});

app.get('/',(req,res)=>{
  database.collection('nodejscollection').find({}).toArray((error,result)=>{
    res.send(result);
  });
});

app.get('/api/user/log', (req, res) => {
    const urlParam = new URL(`http://localhost:3000${req.url}`);
    const userObject = urlParam.searchParams;
    
    //Fetch user pass data from url
    const userEmail = userObject.get('useremail');
    const userPassword = userObject.get('password');
  
    database.collection('nodejscollection').find({email:userEmail}).toArray((error,result)=>{
      if(result.length ==1){
        let dbPassword = result[0].password;
        if(userPassword == dbPassword){
          res.send('correct4005');
        }else{
          res.send('incorrect4002')
        }
      }else{
        res.send('notexist4001');
      }
    });
});

app.listen(port, () => {
    // Connect to MongoDB Atlas
  MongoClient.connect(CONNECTION_STRING,(error,client)=>{
    database = client.db('NodeJS');
    console.log("Successfully connected to MongoDB Atlas!");
  });
  console.log(`🚀Example app listening on port🚀 ${port}`);
})

function sendEmail(emailAddress,otp) {
    var transporter =  Nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'hnddgree2023@gmail.com',
          pass: 'glnw fkuv shqu htha'
        },
        tls: {
            rejectUnauthorized: false
        }
      });
      
      var mailOptions = {
        from: 'hnddgree2023@gmail.com',
        to: emailAddress,
        subject: 'Froget Password OTP Request',
        html: `<h2>Hello ${emailAddress.split('@')[0]},</h2>
        <p>Your One-Time Password (OTP) code is: <h3>${otp}</h3></p>
        <p>Please use this code to complete your transaction. This code is valid for the next 10 minutes.</p>
        <p>If you did not request this code, please ignore this email and ensure your account is secure.</p>
        <p>Best regards,</p>
        <p>Login@info</p>
        <p><a href="mailto:support@yourapp.com">Login@Info.com</a></p>` // html body
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}
