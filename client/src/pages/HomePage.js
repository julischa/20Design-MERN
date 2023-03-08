import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import { useNavigate } from "react-router-dom";
import Parallax from "../components/Parallax";

function HomePage() {
  const navigate = useNavigate();

  function handleSignUp() {
    navigate("/register");
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="landingtext text-center">
        Create & share <br></br>pins with your friends.
        <br></br>
        <button className="signup mb-5" onClick={handleSignUp}>
          Sign up
        </button>
        <span></span>
      </div>

      <div className="container d-flex justify-content-center mx-5">
        <img src={Img1} alt="image1" id="img1" />
        <img src={Img2} alt="image2" id="img2" />
      </div>
      <Parallax />
    </div>
  );
}

export default HomePage;
