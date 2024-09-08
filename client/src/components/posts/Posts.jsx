import Post from '../post/Post';
import './Posts.css';

export default function Posts({ posts }) {
  // Ensure posts is an array
  return (
    <div className="posts">
      {Array.isArray(posts) && posts.length > 0 ? (
        posts.map(p => (
          <Post key={p._id} post={p} />
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}
