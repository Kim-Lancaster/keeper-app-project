import React, { useState } from "react";

import Header from "./Header";
import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";
import Note from "./Note";
import Footer from "./Footer";




   
const App = () => {

    const [button, setButton] = useState(false) //if button is clicked
    const [newNote, setNewNote] = useState({ //new note content
        title: "",
        body: ""
    })
    const [allNotes, setAllNotes] = useState([]); //all notes

    function handleNewClick(){ //updates button state
        setButton(true)
    }

    function handleChange(e){ //updates newNote
        const {name, value} = e.target
        setNewNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    function handleAddClick(){ //Adds newest not to all notes
        setAllNotes(prevValue => {
            return [...prevValue, newNote]
        })
        setNewNote({
            title: "",
            body: ""
        })
        setButton(false)
    }

    function handleDeleteClick(id){ //removes deleted note from allNotes array
        setAllNotes((prevValue) => {
            return prevValue.filter((item, index) => {
                return index !== id
            })
        })
    }
    return (
    <div>
        <div className="header">
           <Header />
           { button && <div className="new-note">
                <Input 
                    onChange={handleChange} 
                    value={newNote.title}
                    name="title"
                    type="text"
                    placeholder="enter title"
                    id="title"
                />
                <TextArea
                    onChange={handleChange} 
                    value={newNote.body}
                    name="body"
                    placeholder="enter note"
                    id="body"
                />
                <div className="buttons">
                <Button onClick={handleAddClick} content="Add Note" />
                <Button onClick={() => setButton(false)} content="Cancel" />
                </div>
            </div> }
           {!button && <Button onClick={handleNewClick} content="New Note"/>}

        </div>
        <div  className="flex-container middle">
            {allNotes.map((notes, index) => {
                return <Note
                    key={index}
                    id={index}
                    onDelete={handleDeleteClick}
                    header={notes.title}
                    body={notes.body}
                />})
            }
        </div>
        <Footer />
    </div>
    )
}

export default App;