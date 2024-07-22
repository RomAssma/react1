import React from 'react';
import image1 from './smartphone.jpg';

function Image() { 
  return (
    <div>
      <img src={image1}  style={{ maxwidth: '100%', widht: "auto" }}/>
    </div>
  );
}

export default Image;
