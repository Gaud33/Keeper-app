import React, {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import InputArea from "./InputArea";
function App() {

  const [notes, setNotes] = useState([]);

  function addNote(note){
    setNotes(prevNotes =>{
      return [...prevNotes, note];
    })
  }


  return (
    <div class = "content">
      <Header />
      <div class="create-note">
        <InputArea
          onAdd = {addNote} 
        />
        </div>

        <div class="note-section">
        {notes.map( (noteItem) =>{
          return <Note title = {noteItem.title} content = {noteItem.content}/>
        })}

        </div>
      

      <Footer />
    </div>
  );
}

export default App;
