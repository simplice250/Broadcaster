const express = require('express');

const router = express.Router();


let users = [];
let redflags = [];
let Id = 0;
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


router.get('/auth/signup/',(req,res)=>res.json(users));

router.get('/auth/signup/:id',(req,res)=>{
    const found=users.some(user=>user.id===parseInt(req.params.id));
    if(found){
        res.json(users.filter(user=>user.id===parseInt(req.params.id)));
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
                res.json({msg:'user apdated',user});
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
    

    router.post('/redflag',(req,res)=>{
        Id++;
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
        const redflag={
    
         id : Id,
createdOn :JSON.stringify(today),
createdBy : req.body.createdBy, 
title:req.body.title ,
tagname:req.body.tagname,
type : 'redflag', 
location : req.body.location, 
status : req.body.status, 
images:req.body.images,
videos : req.body.videos,
comment : req.body.comment


        }
        if(!redflag.title){
           return res.status(400).json({
               "status" :400,
               "error" : "please enter the title"
               }
               );
           }else if(!redflag.type){
            return res.status(400).json({
                "status" :400,
                "error" : "please enter the type"
                })
           
           }else{
            redflags.forEach(user=>{
                if(incidents.title===req.body.title){
                  
                    return res.status(401).json({
                        "status" :401,
                        "error" : "title already exist"
                        }
                        );
                        
                    }
                })
           }
        
    
        redflags.push(redflag);
        res.status(201).json({
            "status" : 201,
            "message": "redflag created successfully",
            "data" :JSON.stringify(redflags)});
    })
   
    router.get('/redflag',(req,res)=>res.json(redflags));

router.get('/redflag/:id',(req,res)=>{
    const found=redflags.some(redflag=>redflag.id===parseInt(req.params.id));
    if(found){
        res.json(redflags.filter(redflag=>redflag.id===parseInt(req.params.id)));
    }else{
        res.status(400).json({msg:'redflag not found' });
    }
    
});


router.delete('/redflag/:id',(req,res)=>{
    const found=redflags.some(redflag=>redflag.id===parseInt(req.params.id));
    if(found){
        redflags=redflags.filter(redflag=>redflag.id!==parseInt(req.params.id));
        res.status(200).json({msg:'user deleted successfully'})
    }else{
        res.status(400).json({msg:'user not found' });
    }
    
});

router.patch('/redflag/:id/comment',(req,res)=>{
    const found=redflags.some(redflag=>redflag.id===parseInt(req.params.id));
    if(found){
        const upRedflag=req.body;
        redflags.forEach(redflag=>{
            if(redflag.id === parseInt(req.params.id) ){
                if(!upRedflag.comment){
                redflag.comment="";}else{
                 redflag.comment=upRedflag.comment;   
        }
                
                redflag.id=redflag.id;
                redflag.createdOn=redflag.createdOn;
                redflag.createdBy=redflag.createdBy;
                redflag.title=redflag.title;
                redflag.tagname=redflag.tagname;
                redflag.type=redflag.type;
                redflag.location=redflag.location;
                redflag.status =redflag.status;
                redflag.images=redflag.images;
                redflag.videos=redflag.videos
            
                
                redflags=redflags.filter(redflag=>redflag.id!==parseInt(req.params.id));
                redflags.push(redflag);
                res.json({msg:'redflag apdated',redflag});
            }
        })
        
    }else{
        res.status(404).json({msg:'user not found' });
        
    }
})

router.patch('/redflag/:id/location',(req,res)=>{
    const found=redflags.some(redflag=>redflag.id===parseInt(req.params.id));
    if(found){
        const upRedflag=req.body;
        redflags.forEach(redflag=>{
            if(redflag.id === parseInt(req.params.id) ){
                redflag.comment=redflag.comment;
                redflag.id=redflag.id;
                redflag.createdOn=redflag.createdOn;
                redflag.createdBy=redflag.createdBy;
                redflag.title=redflag.title;
                redflag.tagname=redflag.tagname;
                redflag.type=redflag.type;
                if(!upRedflag.location){
                redflag.location="";}else{
                     redflag.location=JSON.stringify(upRedflag.location);
                }
               
                redflag.status =redflag.status;
                redflag.images=redflag.images;
                redflag.videos=redflag.videos
            
                
                redflags=redflags.filter(redflag=>redflag.id!==parseInt(req.params.id));
                redflags.push(redflag);
                res.json({msg:'redflag apdated',redflag});
            }
        })
        
    }else{
        res.status(404).json({msg:'user not found' });
        }
  });
