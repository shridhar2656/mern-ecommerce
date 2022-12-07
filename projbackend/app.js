require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const authRoutes = require("./routes/auth.js")

const app = express();

// db connection
mongoose.connect(process.env.DATABASE_URL,
{ 
useUnifiedTopology: true ,
useNewUrlParser:true,
useCreateIndex: true
}).then(()=>
{console.log("DB CONNECTED")
}).catch(()=>{"ERROR WITH DB CONNECTION"})

// these are middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//my routes
app.use("/api",authRoutes);

//port
const port = process.env.PORT || 8000

//starting server
app.listen(port,()=> {
    console.log(`App is running on port ${port} ...`);
});