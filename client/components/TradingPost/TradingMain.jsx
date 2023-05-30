import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import TradingBoard from '../TradingPost/TradingBoard.jsx';
import TradingNewPost from '../TradingPost/TradingNewPost.jsx';


const TradingMain = () => {

  return (
    <div>
      <h1>Trading Main</h1>
      <Link to='/tradingboard'>Trading Board</Link>
      <Link to='/tradingpost'>Create New Post</Link>

      <Routes>
        <Route path='tradingboard'element={ <TradingBoard /> }/>
        <Route path='tradingpost' element={ <TradingNewPost /> }/>
      </Routes>
    </div>
  );
}

export default TradingMain;