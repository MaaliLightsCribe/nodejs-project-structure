const { db } = require("./config")
const Sequelize = require("sequelize");
const connectDB = () => {
    const sequelize = new Sequelize(db.DATABASE_DEV, db.ADMIN, process.env.NODE_ENV == "development" ? db.PASSWORD_DEV : db.PASSWORD_PROD, {
        dialect: "mysql"
    });
    sequelize
        .authenticate()
        .then(() => {
            console.log("Connection established successfully.");
        })
        .catch(err => {
            console.error("Unable to connect to the database:", err);
        })
        .finally(() => {
            sequelize.close();
        });
};

module.exports = connectDB;