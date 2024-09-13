// src/pages/CreateBlog.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CreateBlog.css';  // Importar el archivo CSS

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    })
      .then(res => res.json())
      .then(() => navigate('/'))
      .catch(error => console.log(error));
  };

  return (
    <div className="create-blog-container">
      <h1 className='create-edit-header'>Crear Nuevo Blog</h1>
      <form className='create-edit-form' onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Contenido"
          required
        />
        <button type="submit">Crear Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
