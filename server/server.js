const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));
app.use('/', require('./Routes/api/incident'));
app.use('/', require('./Routes/api/signIn'));
app.use('/', require('./Routes/api/signUp'));


const PORT = process.env.PORT || 5000;
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`server is runing on port: ${PORT} Dir:${__dirname}`));
module.exports=app;