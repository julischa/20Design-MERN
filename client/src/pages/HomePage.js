import React from "react";
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";

const HomePage = () => {
  return (
    <div>
      <h1 className="landingtext">
        Create and share <br></br>design ideas with <br></br>your friends.
      </h1>
      <div className="container">
        <img src={Img1} alt="image1" id="img1" />
        <img src={Img2} alt="image2" id="img2" />
      </div>
    </div>
  );
};

export default HomePage;
