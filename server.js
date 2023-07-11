const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://kr:WZUx3zFAivYY8cQr@reactdata.2vy4ddq.mongodb.net/reactdata', { useNewUrlParser: true });

const noteSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  });


const Note = mongoose.model("Note", noteSchema);

app.post("/contact", async (req, res) => {
  try {
    let newNote = new Note({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    });

    await newNote.save();

    res.json({ message: "Note saved successfully", newNote });
  } catch (error) {
    res.json({ error });
  }
});


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});