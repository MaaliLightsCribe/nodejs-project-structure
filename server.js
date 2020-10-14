const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
// require('dotenv').config();

// // Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Route files
// require("./startup/routes")(app);

console.log(process.env.NODE_ENV);

// Server Running Info
const PORT = process.env.PORT || 8000
//For Dev http
    const server = app.listen(
        PORT,
        console.log(
            `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
        )
    );

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server & exit process
    // server.close(() => process.exit(1));
});