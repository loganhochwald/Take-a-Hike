import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TradingBoardEntry from '../TradingPost/TradingBoardEntry.jsx';

const TradingBoard = () => {

  const [posts, setPosts] = useState(null);



  useEffect(() => {
    getPosts();
  }, [])

  const getPosts = async () => {
    try {
      const allPosts = await axios.get('/trading');
      setPosts(allPosts.data);
    } catch (error) {
      console.error("Could not submit new post", error);
    }
  }

  return (
    <div>
      <h1>Trading Board</h1>
      { posts && posts.map((post) => {
        return <TradingBoardEntry key={ post._id }post={ post} />
      })
}
    </div>
  )
}

export default TradingBoard;