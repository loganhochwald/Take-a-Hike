import React, { useState, useEffect } from 'react';

const TradingNewPost = () => {

  return (
    <div className="new-trading-post">
      <h1 className="Header" alignment="center">Sell Your Goods</h1>
      <form className="box" onSubmit={ () => console.log('Submitted') }>

        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              type="text"
              placeholder="Title"
              className="card"
              // value={ }
              onChange={ () => console.log('Title Change') }
              name="title"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Meetup Location</label>
          <div className="control">
            <input
              type="text"
              placeholder="Meetup Location"
              className="card"
              // value={ }
              onChange={ () => console.log('Meetup Change') }
              name="meetup-location"
            />
          </div>
        </div>

        <div className="field">
  <label className="label">Description</label>
  <div className="control">
    <div style={{ display: "flex" }}>
      <input
        type="image"
        // src=""
        width="80"
        height="60"
        style={{ marginRight: "8px" }}
      />
      <input
        type="text"
        placeholder="Describe Your Goods"
        className="card"
        // value={ }
        onChange={() => console.log('Description Change')}
        name="post-description"
        style={{ height: "80px", width: "200px" }}
      />
    </div>
  </div>
</div>


        <input
          type="submit"
          value="Send New Post"
          className="button black-button"
        />
      </form>
    </div>
  );

}

export default TradingNewPost;