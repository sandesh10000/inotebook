import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext"
import NoteItem from "./NoteItem";

export default function Notes() {
    const context=useContext(noteContext);
    const {notes,setNotes}=context;
  return (
    <div className="row">
      <h2>Your Notes</h2>
        {
          notes.map((element)=>{
            return <NoteItem key={element._id} element={element} />
          })
        }
    </div>
  )
}
