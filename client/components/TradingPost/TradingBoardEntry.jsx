import React, { useState, useEffect } from 'react';
import { useLocation, Link, Outlet } from 'react-router-dom';


const TradingBoardEntry = ({ post }) => {

  const[thisPost, setThisPost] = useState(post);

  const link = `/tradingpost/trade/${thisPost._id}`;


  return (
    <div>
      <h1>{thisPost._id}</h1>
      <Link to={link} state={{ thisPost: thisPost }} className="link">{post.title}</Link>
      <Outlet />
    </div>
  );
}

export default TradingBoardEntry;