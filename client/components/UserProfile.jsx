import React from "react";
import axios from "axios";
import { useEffect, useState, } from "react";
import { useParams } from 'react-router-dom';


const UserProfile = ({ setUserId }) => {
  const [profileName, setProfileName] = useState("");
  const [picture, setPicture] = useState("");
  const [email, setEmail] = useState("");

  const params = useParams();


  // const { userId } = useParams;
  // console.log(userId);
  const getParams = () => {
    // console.log(params);
    //   // console.log(Object.values(params)[0].split('/')[1])
    //   console.log(params.id)

      if(params.id) {
        setUserId(params.id);
      }

  }



  useEffect(() => {
    getParams();
    axios.get("/profile").then((profile) => {
      const user = profile.data;
      // console.log(user);
      setProfileName(user.fullName);
      setPicture(user.picture);
      setEmail(user.email);
    });
  });


  return (
    <div className="profile-card">
      <h1>Welcome {profileName}</h1>
      <a href={picture}></a>
      <p>{email}</p>
      <form action="/logout" method="POST">
        <button type="submit">Logout</button>
      </form>
    </div>
  );

};

export default UserProfile;
