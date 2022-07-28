const express = require('express')
const cors = require('cors');
const { default: mongoose } = require('mongoose');

const blogRouter  = require('./routes/blog-routes')
const router  = require('./routes/user-routes')

require('dotenv').config();

const app=express();

app.use(cors());
app.use(express.json())

const url = process.env.ATLAS_URL;

mongoose.connect(url,{useUnifiedTopology:true},(err)=>console.log(console.log("connection created",err)))

app.use("/api/user",router);
app.use("/api/blog",blogRouter);


const port = process.env.PORT

app.listen(port,() =>{
    console.log('server is running on port:',port)
})


