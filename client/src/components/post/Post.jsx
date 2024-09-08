import './post.css';
import { Link } from 'react-router-dom';

export default function Post({ post }) {
  if (!post) return null; // Early return if post is not provided

  const PF = process.env.REACT_APP_API_URL || "http://localhost:5000/images/";

  return (
    <div className='post'>
      {post.photo && <img className="postImg" src={PF + post.photo} alt="Post" />}
      
      <div className="postInfo">
        <div className="postCats">
          {Array.isArray(post.categories) && post.categories.length > 0 ? (
            post.categories.map((c, index) => (
              <span key={c._id || index} className="postCat">{c.name}</span>
            ))
          ) : (
            <span className="postCat">No categories</span>
          )}
        </div>
        
        <Link to={`/post/${post._id}`} className='link'>
          <span className='postTitle'>{post.title || 'Untitled'}</span>
        </Link>
        
        <hr />
        <span className="postDate">{post.createdAt ? new Date(post.createdAt).toDateString() : 'Unknown date'}</span>
      </div>
      
      <p className='postDesc'>{post.desc || 'No description available'}</p>
    </div>
  );
}
