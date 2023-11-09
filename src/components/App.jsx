import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import AddNote from "./AddNote";

function App() {
  const [notes, setNotes] = useState([]);

  // using the data as the id. specifically using the timestamp.
  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, { ...newNote, id: Date.now() }];
    });
  };

  // filtering out the note according to it id.
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.id !== id);
    });
  };

  return (
    <div>
      <Header />
      <AddNote onAdd={addNote} />
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
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
