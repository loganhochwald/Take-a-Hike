import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const TradeDisplay = () => {
  const location = useLocation();

  const [post, setPost] = useState(location.state?.thisPost);

  return (
<div className='list-item-card'>
  <h1>{post.title}</h1>
  <h2>Price: {post.price}</h2>
  <p>Location: {post.location}</p>
  <p>{post.description}</p>
</div>
  );
}

export default TradeDisplay;