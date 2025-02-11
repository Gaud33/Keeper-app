import React from "react";
import PushPinIcon from '@mui/icons-material/PushPin';
import DeleteIcon from "./DeleteIcon";


import "./Note.css";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }


  return (
    
    <div className="note">
    <PushPinIcon className = "push-pin"/>
    
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button class="delete-btn" onClick={handleClick}>
        
      <DeleteIcon />

      </button>     
    </div>
    

  );
}

export default Note;
