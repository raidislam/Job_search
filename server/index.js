const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require("./db");
const port = process.env.PORT || 5050;

// middlewere
app.use(cors());
app.use(express.json());

// Database conection
dbConnect()

app.get('/',(req,res)=>{
    res.send('Job Portal Service')
})



app.listen(port,()=>{
    console.log('Server Running');
})




