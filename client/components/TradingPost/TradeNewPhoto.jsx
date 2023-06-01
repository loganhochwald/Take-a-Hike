import React, { useState } from 'react';

const TradeNewPhoto = ({ postTexts, user }) => {

  // My specific presets, need to hide from client side using dotenv-webpack plugin
const cloudName = process.env.CLOUDINARY_NAME;
const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET;
console.log(cloudName, uploadPreset)


  const [uploadedPhoto, setUploadedPhoto] = useState(null);

  const showWidget = () => {
    const myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        maxFiles: 3,
        folder: "trade_images",
        tags: [`user:${user._id}`],
        maxImageFileSize: 2000000,
        maxImageWidth: 2000,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Image posted to cloudify: ", result.info);
          setUploadedPhoto(result.info.secure_url);
        }
      }
    );
    myWidget.open();
  };

  // style={{ width: '250px' }}

  return (
    <div>
      {uploadedPhoto && (
        <img src={uploadedPhoto} />
      )}

      <button id="upload-cloudify-button" onClick={ showWidget }>Upload Trade Images</button>
    </div>
  );
};

export default TradeNewPhoto;
