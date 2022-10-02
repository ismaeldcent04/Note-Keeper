import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setnotes] = useState([]);
  function addNote(note) {
    console.log(note);
    setnotes((prevNote) => {
      return [...prevNote, note];
    });
  }
  function deleteNote(id) {
    setnotes((prevNote) => {
      return prevNote.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
