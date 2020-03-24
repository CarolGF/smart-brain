import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img
          id='inputImage'
          alt=''
          width='500px'
          height='auto'
          src={imageUrl}
        ></img>
        <div
          className='bounding_box'
          style={{
            top: box.topRow,
            left: box.leftCol,
            bottom: box.bottomRow,
            right: box.rightCol
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
