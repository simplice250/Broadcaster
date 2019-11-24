const express = require('express');

const router = express.Router();

let users=require('../../db/userDb');

let reg = 0;


router.post('/auth/signup/', (req, res) => {
    reg++;
    const newUser = {
    id: reg,
      firstname: req.body.firstname,
       lastname: req.body.lastname,
       email: req.body.email, 
       phoneNumber: req.body.phoneNumber,
       username: req.body.username,
       password: req.body.password,
       status: 'Active'   
      }
      if(!newUser.email){
         return res.status(400).json({
             "status": 400,
             "error": "please enter your e-mail"

             }
             );
         }else if(!newUser.lastname){
          return res.status(400).json({
              "status": 400,
              "error": "please enter your last name"
              })
         }else if( !newUser.firstname){
          return res.status(400).json({
              "status" :400,
              "error" : "please enter your fisrt name"
              })
         }else{
          users.forEach(user=>{
              if(user.email.toString()===req.body.email.toString()){
                
                  return res.status(409).json({
                      "status" :409,
                      "error" : "E-mail already exist"
                      }
                      );
                      
                  }
              })
         }
      
  
      users.push(newUser);
      return  res.status(201).json({
          "status" : 201,
          "message": "User created successfully",
          "data" :JSON.stringify(users)});
  })

  router.get('/auth/signup/',(req,res)=>res.status(200).json(users));

router.get('/auth/signup/:id',(req,res)=>{
    const found=users.some(user=>user.id===parseInt(req.params.id));
    if(found){
        res.status(200).json(users.filter(user=>user.id===parseInt(req.params.id)));
    }else{
        res.status(400).json({msg:'user not found' });
    }
    
});

router.put('/auth/signup/:id',(req,res)=>{
    const found=users.some(user=>user.id===parseInt(req.params.id));
    if(found){
        const upUser=req.body;
        users.forEach(user=>{
            if(user.id === parseInt(req.params.id) ){
                user.firstname=upUser.firstname? upUser.firstname :user.firstname;
                user.lastname=upUser.lastname? upUser.lastname :user.lastname;
                user.email=upUser.email? upUser.email :user.email;
                user.username=upUser.username? upUser.username :user.username;
                user.phoneNumber=upUser.phoneNumber? upUser.phoneNumber :user.phoneNumber;
                user.password=upUser.password? upUser.password :user.password;
                users=users.filter(user=>user.id!==parseInt(req.params.id));
                users.push(user);
                res.status(200).json({msg:'user apdated',user});
            }
        })
        
    }else{
        res.status(400).json({msg:'user not found' });
        
    }
    
});



router.delete('/auth/signup/:id',(req,res)=>{
    const found=users.some(user=>user.id===parseInt(req.params.id));
    if(found){
        users=users.filter(user=>user.id!==parseInt(req.params.id));
        res.status(200).json({msg:'user deleted successfully'})
    }else{
        res.status(400).json({msg:'user not found' });
    }
    
});
module.exports=router;