const dotenv = require('dotenv');
// // Load env vars
dotenv.config({ path: './config/config.env' });
module.exports = {
    PORT: process.env.PORT,
    db: {
        ADMIN: process.env.ADMIN,
        DATABASE_DEV: process.env.DB_DEV,
        PASSWORD_DEV: process.env.PWD_DEV,
        DATABASE_PROD: process.env.DB_PROD,
        PASSWORD_PROD: process.env.PWD_PROD
    }
};