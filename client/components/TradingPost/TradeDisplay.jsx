import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const TradeDisplay = () => {
  const location = useLocation();

  const [post, setPost] = useState(location.state?.thisPost);

  //THE LOCATION MAP WILL NEED TO BE PLACED NEXT TO THIS SO THE CARD IS ON THE LEFT AND THE MAP IS ON THE RIGHT
  return (
    <div className='list-item-card'>
      <img src={post.pictures} style={{ width: '400px', height: '400px' }} />
      <div>
        <h1>{post.title}</h1>
        <h2>Price: {post.price}</h2>
        <p>Location: {post.location}</p>
        <p>{post.description}</p>
      </div>
    </div>
  );
}

export default TradeDisplay;