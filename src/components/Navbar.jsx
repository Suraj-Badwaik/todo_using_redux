import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import "./Navbar.css"

const Navbar = () => {
  let { isAuth } = useSelector((state) => state.auth);
  console.log("isAuth:", isAuth);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (isAuth) {
      navigate("/login");
    } else {
      navigate("/");
    }

    isAuth=false;
  };

 
  return (
    <div className="Main">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        {isAuth ? (
          <button onClick={handleLoginClick}>Logout</button>
        ) : (
          <button onClick={handleLoginClick}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
