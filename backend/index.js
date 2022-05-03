const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose")
const dotenv = require("dotenv").config();
const router = require("./routes/routes")
app.use(cors());
//body parser
app.use(express.json())

//routers 
app.use("/", router)





const PORT = process.env.PORT;
const URI = "mongodb://localhost:27017"





mongoose.connect(URI).then(() => {
    console.log("MongoDb is connected!!!");

}).catch((err) => {
    console.log(err)
})





app.listen(8800, () => {
    console.log("server is running ")
})