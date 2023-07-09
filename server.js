const express = require("express");
const = express();
const cors = require("cors");
const mongoose = require("moongoose")

app.use(cors());
app.use(express.json());

mongoose.connect("")
//require route

app.listen(3001, function() {
    console.log("express server os running on port 3001");
})


