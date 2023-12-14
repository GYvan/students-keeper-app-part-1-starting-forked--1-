const express = require('express');
const router = express.Router();
const Note = require('../models/noteModel');

// Get all notes
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new note
router.post('/', async (req, res) => {
    const note = new Note({
      title: req.body.title,
      content: req.body.content
    });
  
    try {
      const newNote = await note.save();
      res.status(201).json(newNote); // This should send back the new note with MongoDB _id
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
// delete a note
router.delete('/:id', async (req, res) => {
    try {
      const note = await Note.findByIdAndDelete(req.params.id);
      if (!note) res.status(404).send("No item found");
      res.status(200).send();
    } catch (err) {
      res.status(500).send(err);
    }
  });
  

module.exports = router;
