import React, {useState} from "react";


function InputArea(props){

    const [note, setNote] = useState({
        title:"",
        content:""
    });

    function handleChange(event){
        const {name, value} = event.target;

        setNote(prevNote=>{
            return{
                ...prevNote,
                [name]:value
            };
        });
    }

    function submitNote(event){
        props.onAdd(note);
        event.preventDefault();
        setNote({title:"", content:""})
    }
    

    return(
        <form class = "note input-area">
        <input name = "title" value = {note.title} onChange = {handleChange} class = "input" placeholder="Title" /> <br />
        <textarea name = "content" value = {note.content} onChange = {handleChange} class = "input" placeholder="Take a note..." />
        <button onClick = {submitNote}type = "submit">Add</button>
        </form>
    );
}

export default InputArea;