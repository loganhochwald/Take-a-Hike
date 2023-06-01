import React from 'react';

const cloudName = ""; // replace with your own cloud name
const uploadPreset = ""; // replace with your own upload preset


const TradeNewPhoto = ({ postTexts, user }) => {

  if(user !== null) {
    console.log(user._id)

  }
  const myWidget = cloudinary.createUploadWidget(
    {
      cloudName: cloudName,
      uploadPreset: uploadPreset,
      maxFiles: 3,  //restrict upload to three images
      folder: "trade_images", //upload files to the specified folder
      tags: [`user: ${ user._id }`], //add the given tags to the uploaded files
      maxImageFileSize: 2000000,  //restrict file size to less than 2MB
      maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
      }
    }
  );
  const showWidget = (event, widget) => {
    event.preventDefault();
    widget.open();
  };

  return (
    <h1>Insert Photo Here</h1>
  )
}

export default TradeNewPhoto;