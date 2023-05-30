import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import TradingBoard from '../TradingPost/TradingBoard.jsx';
import TradingNewPost from '../TradingPost/TradingNewPost.jsx';


const TradingMain = () => {

  return (
    <div>
      <h3
        className="content has-text-centered"
        padding="20px 40px"
        margin-left="40px"
      >
        Trading Post
      </h3>
      <div className="content has-text-centered">
      <Link to='/tradingpost/tradingboard'>Trading Board</Link> |{' '}
      <Link to='/tradingpost/createtrade'>Create New Post</Link>
      </div>

      <Routes>
        <Route path='tradingpost/tradingboard' element={ <TradingBoard /> }/>
        <Route path='tradingpost/createtrade' element={ <TradingNewPost /> }/>
      </Routes>
    </div>

  );
}

export default TradingMain;