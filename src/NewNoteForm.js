import React, { useState } from 'react';
import TextField from './TextField';

const NewNoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addNote({
      id: new Date().getTime(),
      title,
      content,
    });
    setTitle('');
    setContent('');
  };

  return (
    <form className='NewForm' onSubmit={handleSubmit}>
      <TextField value={content} onChange={setContent} />
      <button className='AddNoteButton' type='submit'>Add Note</button>
    </form>
  );
};

export default NewNoteForm;
    