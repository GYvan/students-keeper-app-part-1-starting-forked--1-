import React from "react";

function Note({ id, title, content, onDelete }) {
  const handleDelete = () => {
    console.log("the id is", id)
    onDelete(id);
  };

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Note;
