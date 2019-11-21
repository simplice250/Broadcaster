const express = require('express');

const router = express.Router();

let users=require('../../db/userDb');

router.post('/auth/signin/',(req,res)=>{
  
    const credentials={
     email: req.body.email, 
     password:req.body.password 
    }
    users.forEach(user=>{
     if(user.email===credentials.email){
         users.forEach(user=>{
             if(user.password===credentials.password){
               return  res.status(200).json({ status: 200, message:'User is successfully logged in',data:JSON.stringify(user)})
             }else{
                return res.status(400).json({msg:'wrong password'})
             }
         })
         
     }else{
        return res.status(400).json({msg:'wrong E-mail'})
     }


    })
    
       })
       module.exports=router;
    