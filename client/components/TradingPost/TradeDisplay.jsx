import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';

const TradeDisplay = () => {
  const location = useLocation();
  console.log(location, " useLocation Hook");
  console.log(location.state.thisPost, " passed down state");

  const [post, setPost] = useState(location.state?.thisPost);

  console.log(post);


  return (
    <div>
    </div>
  );
}

export default TradeDisplay;