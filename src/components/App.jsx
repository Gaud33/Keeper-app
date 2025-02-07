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

  function deleteNote(id){
    setNotes(prevNotes =>{
      return prevNotes.filter( (noteItem, index)=>{
        return index !== id;
      })
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
        {notes.map( (noteItem,index) =>{
          return (
          <Note 
          key = {index}
          id = {index}
          title = {noteItem.title} 
          content = {noteItem.content} 
          onDelete = {deleteNote}/> );
        })
        }

        </div>
      

      <Footer />
    </div>
  );
}

export default App;
