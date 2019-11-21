const express = require('express');

const router = express.Router();

let incidents = require('../../db/redflagDb');

let Id = 0;
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
type : req.body.type,
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
        incidents.forEach(incident=>{
            if(incident.title===req.body.title){
              
                return res.status(401).json({
                    "status" :401,
                    "error" : "title already exist"
                    }
                    );
                    
                }
            })
       }
    

    incidents.push(redflag);
    res.status(201).json({
        "status" : 201,
        "message": "redflag created successfully",
        "data" :JSON.stringify(incidents)});
})

router.get('/redflag',(req,res)=>res.status(200).json(incidents));

router.get('/redflag/:id',(req,res)=>{
const found=incidents.some(redflag=>redflag.id===parseInt(req.params.id));
if(found){
    res.status(200).json(incidents.filter(redflag=>redflag.id===parseInt(req.params.id)));
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
const found=incidents.some(redflag=>redflag.id===parseInt(req.params.id));
if(found){
    const upRedflag=req.body;
    incidents.forEach(redflag=>{
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
        
            
            incidents=redflags.filter(redflag=>redflag.id!==parseInt(req.params.id));
            incidents.push(redflag);
            res.json({msg:'redflag apdated',redflag});
        }
    })
    
}else{
    res.status(404).json({msg:'user not found' });
    
}
})

router.patch('/redflag/:id/location',(req,res)=>{
const found=incidents.some(redflag=>redflag.id===parseInt(req.params.id));
if(found){
    const upRedflag=req.body;
    incidents.forEach(redflag=>{
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
        
            
           incidents=incidents.filter(redflag=>redflag.id!==parseInt(req.params.id));
           incidents.push(redflag);
            res.status(200).json({msg:'redflag apdated',redflag});
        }
    })
    
}else{
    res.status(404).json({msg:'user not found' });
    }
});
module.exports=router;