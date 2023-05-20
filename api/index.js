const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database')
const app = express();
const mainRoutes = require('./routes/main')
const cookieParser = require('cookie-parser');
const logger = require('morgan')
const path = require("path");
require('dotenv').config({path: './config/.env'})

// Enable CORS for client origin only
const corsOptions = {
  credentials:true,
  origin : ['http://localhost:3000', 'https://localhost:3000'],
}
app.use(cors(corsOptions))
app.use(express.json());
app.use(cookieParser());
app.use(logger('dev'))

// Routes
app.use('/', mainRoutes)

// Serve static files
app.use(express.static(path.join(__dirname, "..", "client", "build")));

// Catch-all route for serving index.html
app.get('*', (req, res, next) => {
  // Check if the request has been handled by previous routes
  if (!res.headersSent) {
    res.sendFile(path.join(__dirname, "..", 'client/build', 'index.html'));
  } else {
    next(); // Pass control to the next middleware or route handler
  }
});

connectDB().then(()=>{
  app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}, you better catch it!`)
  })
}).catch((error)=>{console.log('error connecting to DB: ', error)})




