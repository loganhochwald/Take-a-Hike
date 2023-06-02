import React from "react";
import axios from "axios";
import { useEffect, useState, } from "react";
import { useParams } from 'react-router-dom';

import MapBox from '../components/TradingPost/MapBox.jsx'


const UserProfile = ({ setUserId }) => {
  const [profileName, setProfileName] = useState("");
  const [picture, setPicture] = useState("");
  const [email, setEmail] = useState("");


  useEffect(() => {
    axios.get("/profile").then((profile) => {
      const user = profile.data;
      // console.log(user);
      setProfileName(user.fullName);
      setPicture(user.picture);
      setEmail(user.email);
    });
  }, []);


  return (
    <div className="profile-card">
      <h1>Welcome {profileName}</h1>
      <a href={picture}></a>
      <p>{email}</p>
      <form action="/logout" method="POST">
        <button type="submit">Logout</button>
      </form>
      <MapBox />
    </div>
  );

};

export default UserProfile;
