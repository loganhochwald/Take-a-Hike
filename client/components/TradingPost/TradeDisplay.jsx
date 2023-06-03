import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DistanceMap from './DistanceMap.jsx';

const TradeDisplay = () => {
  const location = useLocation();

  const [post, setPost] = useState(location.state?.thisPost);

  //THE LOCATION MAP WILL NEED TO BE PLACED NEXT TO THIS SO THE CARD IS ON THE LEFT AND THE MAP IS ON THE RIGHT
  return (
    <div className="trade-and-distance-map">

    <div className='list-item-card'>
      <div>
        <h1>{post.title}</h1>
        <img src={post.pictures} style={{ width: '400px', height: '400px' }} />
        <h2>Price: ${post.price}</h2>
        <br></br>
        <h2>Description</h2>
        <p>{post.description}</p>
      </div>
    </div>
    <div className='list-item-card'>
      <DistanceMap post={ post }/>
      </div>
    </div>
  );
}

export default TradeDisplay;