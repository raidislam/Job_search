const express = require('express');
const app = express();
const cors = require('cors');
const { dbConnect } = require('./config/db');
const jobsRoutes = require('./routes/jobs.routes');
// Middleware
app.use(cors());
app.use(express.json());

// Database connection
dbConnect(app);


// route 
app.use('/jobs',jobsRoutes);

// Backup route
app.get('/',(req,res)=>{
    res.send('Hello from server');
})


module.exports = app;