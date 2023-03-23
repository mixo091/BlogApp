import React from 'react'
import  { useState } from 'react';
import ReactQuill from 'react-quill';

function Write() {

  const [value, setValue] = useState('');
  
  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='Title' />
        <div className="editorContainer">return <ReactQuill theme="snow" value={value} onChange={setValue} />;</div>
      </div>
      <div className="menu">
        <div className="item">i1</div>
        <div className="item">i2</div>
      </div>

      
      
    </div>
  )
}

export default Write