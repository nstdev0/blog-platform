// src/pages/EditBlog.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/blogs/${id}`);
      const data = await response.json();
      setTitle(data.title);
      setContent(data.content);
    };
    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/blogs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });
    const data = await response.json();
    console.log('Blog actualizado:', data);
    navigate('/');
  };

  return (
    <div>
      <h2>Editar Blog</h2>
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
        <button type="submit">Actualizar Blog</button>
      </form>
    </div>
  );
};

export default EditBlog;
