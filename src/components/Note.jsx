import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Note.css";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button class="delete-btn" onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
