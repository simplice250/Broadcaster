const express=require('express');
const path=require('path');
app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname));
app.use('/', require('./routes/api/users'));

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server is runing on port: ${PORT} Dir:${__dirname}`));
