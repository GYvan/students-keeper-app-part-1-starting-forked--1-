// CreateNote component
import React, { useState } from "react";

function CreateNote({ onAdd }) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  };

  // set it to empty after adding the note
  const handleAddClick = () => {
    // Check if either title or content is not empty
    if (note.title.trim() !== "" || note.content.trim() !== "") {
      onAdd(note);
      setNote({
        title: "",
        content: ""
      });
    }
  };

  return (
    <div className="note">
      <input
        name="title"
        onChange={handleChange}
        placeholder="Title"
        value={note.title}
      />
      <textarea
        name="content"
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..."
      />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}

export default CreateNote;
