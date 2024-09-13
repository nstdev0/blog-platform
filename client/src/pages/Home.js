import React, { useEffect, useState } from 'react';
import BlogList from '../components/BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/blogs`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading blogs: {error.message}</p>;

  return (
    <div>
      <h1>My Blog Platform 2024</h1>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;
