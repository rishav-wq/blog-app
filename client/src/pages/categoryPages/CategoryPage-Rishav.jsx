// src/pages/category/CategoryPage.jsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostsByCategory = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/category/${categoryName}`);
        setPosts(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts by category:", error);
      }
    };

    fetchPostsByCategory();
  }, [categoryName]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Posts in Category: {categoryName}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
