import express from 'express';
import bodyParser from 'body-parser';
import userincident from './Routes/incidents'
import userProfile from './Routes/users'
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1/incident', userincident);
app.use('/api/v1/user', userProfile);



const PORT = process.env.PORT || 5000;
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`server is runing on port: ${PORT} Dir:${__dirname}`));
export default app;