const express=require('express');
const mongoose=require('mongoose');
const cookieSession=require('cookie-session');
const passport= require('passport');
const keys=require('./config/keys');
require('./models/User');
require('./services/passport');

require('./models/db2');
//5.

const app = express();
//createdatabase2
mongoose.connect(keys.mongoURI);//createdatabase1
//114881941968378235493



require('./routes/authRoutes')(app);



const PORT=process.env.PORT||5000;
app.listen(PORT);
