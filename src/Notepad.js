import React, { useState } from 'react';
import NoteList from './NoteList';
import NewNoteForm from './NewNoteForm';

function Notepad() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <div className="notepad-container">
      <h1 className="notepad-title">Notepad Project</h1>
      <NewNoteForm className="new-note-form" addNote={addNote} />
      <NoteList className="note-list" notes={notes} />
    </div>
  );
}

export default Notepad;