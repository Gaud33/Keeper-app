import React from "react";
import EditNoteIcon from '@mui/icons-material/EditNote';
import "./Header.css";


function Header() {
  return (
    <header>
      <h1>
        {" "}
        <EditNoteIcon fontSize="large" /> Keeper
      </h1>
    </header>
  );
}

export default Header;
