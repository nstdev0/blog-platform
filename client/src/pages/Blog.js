// src/pages/Blog.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default Blog;
