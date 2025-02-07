import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Add } from "@mui/icons-material";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import "./InputArea.css";

function InputArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({ title: "", content: "" });
  }

  function handleClick() {
    setExpanded(true);
  }

  return (
    <form class="note input-area">
      <input
        name="title"
        value={note.title}
        onChange={handleChange}
        class="input"
        placeholder="Title"
        style={{ display: isExpanded ? "block" : "none" }}
      />

      <textarea
        onClick={handleClick}
        rows={isExpanded ? "3" : "1"}
        name="content"
        value={note.content}
        onChange={handleChange}
        class="input"
        placeholder="Take a note..."
      />

      <Zoom in={isExpanded}>
        <Fab onClick={submitNote} type="submit">
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
  );
}

export default InputArea;
