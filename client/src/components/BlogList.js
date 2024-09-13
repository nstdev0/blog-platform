import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
    <ul>
      {blogs.map(blog => (
        <li key={blog._id}>
          <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
