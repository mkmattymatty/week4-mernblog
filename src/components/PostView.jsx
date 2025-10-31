import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from "../services/api";

export default function PostView() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/posts/${id}`).then(res => setPost(res.data.data)).catch(console.error).finally(()=>setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!post) return <p>Not found</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      {post.featuredImage && <img src={post.featuredImage} alt={post.title} style={{maxWidth: '100%'}} />}
      <p>{post.content}</p>
      <p>Category: {post.category?.name}</p>
      <Link to={`/edit/${post._id}`}><button>Edit</button></Link>
    </div>
  );
}
