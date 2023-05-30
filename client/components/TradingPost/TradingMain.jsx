import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TradingBoard from '../TradingPost/TradingBoard.jsx';
import TradingNewPost from '../TradingPost/TradingNewPost.jsx';


const TradingMain = () => {

  return (
    <div>
      <h1>Trading Main</h1>
      <TradingBoard />
      <TradingNewPost />
    </div>
  );
}

export default TradingMain;