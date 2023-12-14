import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import AddNote from "./AddNote";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/notes')
      .then(response => {
        setNotes(response.data);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);
  

  const addNote = (newNote) => {
    // Ensure newNote has content before sending
    if (newNote.title.trim() === "" && newNote.content.trim() === "") {
      console.error('Empty note not added.');
      return;
    }
  
    axios.post('http://localhost:5000/notes', newNote)
      .then(response => {
        console.log('Response data:', response.data); // This will output the response data to the console
        setNotes(prevNotes => [...prevNotes, response.data]);
      })
      .catch(error => {
        console.error('Error posting data: ', error);
        console.log('Error response data:', error.response.data); // This will output the error response data to the console, if available
      });
  };
  
  const deleteNote = (id) => {
    console.log("Attempting to delete note with id:", id); // This will confirm the ID value
  
    if (!id) {
      console.error("Cannot delete note without an ID.");
      return;
    }
  
    axios.delete(`http://localhost:5000/notes/${id}`)
      .then(() => {
        setNotes(prevNotes => prevNotes.filter(note => note._id !== id));
      })
      .catch(error => console.error('Error deleting data: ', error));
  };
  

  return (
    <div>
      <Header />
      <AddNote onAdd={addNote} />
      {notes.map((note) => (
        <Note
          key={note._id}
          id={note._id}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
