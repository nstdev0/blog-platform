// src/components/BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  const handleDelete = (id) => {
    fetch(`/api/blogs/${id}`, { method: 'DELETE' })
      .then(res => {
        if (res.ok) {
          window.location.reload();  // Recargar la página para ver los cambios
        } else {
          console.error('Error al eliminar el blog');
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      {blogs.map(blog => (
        <div key={blog._id}>
          <h2>
            <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
          </h2>
          <button onClick={() => handleDelete(blog._id)}>Eliminar</button>
          <Link to={`/edit/${blog._id}`}>
            <button>Editar</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
