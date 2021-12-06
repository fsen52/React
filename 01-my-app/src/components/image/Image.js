import React from "react";
import image2 from "../../assets/img/Image2.jpg";

const Image = () => {
  return (
    <div>
      <div>
          <h3>Statik Yöntem</h3>
        <img src="./assets/img/image1.jpg" />
      </div>
      <div>
          <h3>İmport Yöntemi</h3>
          <img src={image2}/>
          
      </div>
      <div>
          <h3>Require Yöntemi</h3>
          <img src={require("../../assets/img/Image3.jpg").default}/>
      </div>
    </div>
  );
};

export default Image;
