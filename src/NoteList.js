import React from 'react';

function NoteList({ notes }) {
  return (
    <ul className='myList'>
      {notes.map((note) => (
        <li key={note.id}>
          <h3>{note.title}</h3>
          <p dangerouslySetInnerHTML={{__html: note.content}}/>

        </li>
      ))}
    </ul>
  );
}

export default NoteList;