const mongoose = require("mongoose");

const connectToDatabase = async () => {
    const dbURL = "mongodb://localhost:27017/tokpedplay";
    try {
        await mongoose.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to database");
    } catch (error) {
        console.error("Error connecting to database:", error.message);
        process.exit(1);
    }
};

module.exports = connectToDatabase;
