import usersDB from '../db/userDb';
let users=usersDB;

class profile{
static create(req,res){
    let reg = 0;
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


}
    static getAll(req,res){
    res.status(200).json(users);
     }
     static find(req,res){
   
        const found=users.find((user)=>user.id===parseInt(req.params.id));
        if(found){
            res.status(200).json(users.filter(user=>user.id===parseInt(req.params.id)));
        }else{
            res.status(400).json({msg:'user not found' });
        }
        
    
}
static edit(req,res){
   
        const user=users.find((user)=>user.id===parseInt(req.params.id));
        if(found){
            const upUser=req.body;
           
                if(user.id === parseInt(req.params.id) ){
                    user.firstname=upUser.firstname? upUser.firstname :user.firstname;
                    user.lastname=upUser.lastname? upUser.lastname :user.lastname;
                    user.email=upUser.email? upUser.email :user.email;
                    user.username=upUser.username? upUser.username :user.username;
                    user.phoneNumber=upUser.phoneNumber? upUser.phoneNumber :user.phoneNumber;
                    user.password=upUser.password? upUser.password :user.password;
                    users.values=users.filter(user=>user.id!==parseInt(req.params.id));
                    users.push(user);
                    res.status(200).json({msg:'user apdated',user});
                }
           
        
        }else{
            res.status(400).json({msg:'user not found' });
            
        }
        
   
    
}

static edit (req,res){
    const user=users.find((user)=>user.id===parseInt(req.params.id));
    if(user){
        const upUser=req.body;
      
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
        
    }else{
        res.status(400).json({msg:'user not found' });
        
    }
}

     static delete(req,res){
          
const found = users.find((user)=> user.id ===parseInt(req.params.id));
        
        if(found){
            users=users.filter(user=>user.id!==parseInt(req.params.id));
            res.status(200).json({msg:'user deleted successfully'})
        }else{
            res.status(400).json({msg:'user not found' });
        }
        
    
}
static signIn(req,res){
    const found = users.find((user)=> user.email===parseInt(req.params.email));
    if(found){
    const credentials={
        email: req.body.email, 
        password:req.body.password 
       }
       users.forEach(user=>{
        if(user.email===credentials.email){
           
                if(user.password===credentials.password){
                  return  res.status(200).json({ status: 200, message:'User is successfully logged in',data:JSON.stringify(user)})
                }else{
                   return res.status(400).json({msg:'wrong credentials'})
                }
         
            
        }else{
           return res.status(400).json({msg:'wrong credentials'})
        }
   
   
       })
    }else{
        return res.status(400).json({msg:'email does not exist'})
    }
    }
}
export default profile;