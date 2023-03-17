import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import { useNavigate } from "react-router-dom";
import Parallax from "../components/Parallax";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function HomePage() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleSignUp() {
    navigate("/register");
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 homepage">
      <div className="landingtext text-center">
        Create &#38; share <br></br>pins with your friends
        <br></br>
        {isLoggedIn ? (
          <button className="signup mb-5" onClick={logout}>
            Logout
          </button>
        ) : !user ? (
          <button className="signup mb-5" onClick={handleSignUp}>
            Sign up
          </button>
        ) : (
          <button className="signup mb-5" onClick={() => navigate("/redpage")}>
            Create Pin
          </button>
        )}
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
