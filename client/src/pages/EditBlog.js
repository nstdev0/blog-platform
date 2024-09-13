// src/pages/EditBlog.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/EditBlog.css';  // Importar el archivo CSS

const EditBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/blogs/${id}`)
      .then(res => res.json())
      .then(data => {
        setTitle(data.title);
        setContent(data.content);
      })
      .catch(error => console.log(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/blogs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    })
      .then(res => res.json())
      .then(() => navigate(`/blog/${id}`))
      .catch(error => console.log(error));
  };

  return (
    <div className='create-edit-container'>
      <h1 className='create-edit-header'>Editar Blog</h1>
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
        <button type="submit">Actualizar Blog</button>
      </form>
    </div>
  );
};

export default EditBlog;
