import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Note({ note }) {
  return (
    <div>
      <ReactQuill
        theme="snow"
        readOnly
        value={note.content}
        modules={{
          toolbar: false,
        }}
      />
    </div>
  );
}

export default Note;