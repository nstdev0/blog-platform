// src/pages/CreateBlog.js
import React, { useState } from 'react';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/blogs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });
    const data = await response.json();
    console.log('Blog creado:', data);
    // Redirigir o mostrar mensaje de éxito
  };

  return (
    <div>
      <h2>Crear Blog</h2>
      <form onSubmit={handleSubmit}>
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
