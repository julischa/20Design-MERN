import React from "react";
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";

const HomePage = () => {
  const handleSignUp = () => {
    // your sign-up function here
    console.log("Sign up button clicked!");
  };

  return (
    <div>
      <div className="landingtext">
        Create and share <br></br>design ideas with <br></br>your friends.
        <br></br>
        <button className="signup">Sign up</button>
      </div>
      <div className="container">
        <img src={Img1} alt="image1" id="img1" />
        <img src={Img2} alt="image2" id="img2" />
      </div>
    </div>
  );
};

export default HomePage;
