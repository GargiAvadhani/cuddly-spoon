const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://kr:f5Dcyr64lLpdiTy9@test.tacdw0k.mongodb.net/data", { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/src/components/ContactForm.js")
})

const noteSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true
    },
    subject: {
        type: String,
        // required: true
    },
    message: {
        type: String,
        // required: true
    }
})

// const noteSchema ={
//     name: {
//       type: String,
//     //   required: true
//     },
//     email: {
//       type: String,
//     //   required: true
//     },
//     subject: {
//       type: String,
//     //   required: true
//     },
//     message: {
//       type: String,
//     //   required: true
//     }
//   };
  
const Note = mongoose.model("Note", noteSchema);

app.post("/", async (req, res) => {
    // const { name, email, subject, message } = req.body;

    try {

        // const user = new Note(req.body);
        console.log("name: ",req.body);
        let newNote = new Note({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message,
        })

         newNote.save();

        res.json({ message: "Note saved successfully", newNote });
        // console.log("server.js- ",newNote._id);
        // await newNote.save();

    } catch (error) {
        res.json({ error });
    }
})

app.listen(5000, function () {
    console.log("server is running at port 5000");
})

