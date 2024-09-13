// src/components/BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BlogList.css';  // Importar el archivo CSS

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
    <div className="blog-list">
      {blogs.map(blog => (
        <div key={blog._id} className="blog-item">
          <h2>
            <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
          </h2>
          <div className="button-group">
          <Link to={`/edit/${blog._id}`}>
              <button className="edit-button">Editar</button>
            </Link>
            <button className="delete-button" onClick={() => handleDelete(blog._id)}>Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
