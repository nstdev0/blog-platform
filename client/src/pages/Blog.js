// src/pages/Blog.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'; // Importar Link aquí
import '../styles/Blog.css';  // Importar el archivo CSS

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/blogs/${id}`)
      .then(res => res.json())
      .then(data => setBlog(data))
      .catch(error => console.log(error));
  }, [id]);

  const handleDelete = () => {
    fetch(`/api/blogs/${id}`, { method: 'DELETE' })
      .then(res => {
        if (res.ok) {
          navigate('/');
        } else {
          console.error('Error al eliminar el blog');
        }
      })
      .catch(error => console.log(error));
  };

  if (!blog) return <div>Loading...</div>;

  return (
    <div className='blog-container'>
      <div className='blog-header'>
        <h1>{blog.title}</h1>
      </div>
      <div className='blog-content'>
        <p>{blog.content}</p>
      </div>
      <div className="button-group">
        <Link to={`/edit/${blog._id}`}>
          <button className="edit-button">Editar</button>
        </Link>
        <button className="delete-button" onClick={handleDelete}>Eliminar</button>
      </div>
    </div>
  );
};

export default Blog;
