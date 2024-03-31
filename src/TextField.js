import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextField = ({ onChange, value }) => {
  return (
    <ReactQuill className='FormatTool'
      value={value}
      onChange={onChange}
      modules={{
        toolbar: [
          [{ 'font': [] }, 'bold', 'italic', 'underline'],
          ['image', 'video'],
        ],
      }}
    />
  );
};

export default TextField;