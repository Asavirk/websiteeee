import React from "react";
import { assets } from "../assets/assets";
import "./Navbar.css"; 
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'; 

const Navbar = () => {
  const { openSignIn } = useClerk(); // Clerk Sign In function
  const { isSignedIn, user } = useUser(); // Check if user is signed in

  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="logo" />

      {isSignedIn ? (
        // User is signed in → show profile button
        <div>
          <UserButton/>
        </div>
      ) : (
        // User is not signed in → show Sign In button
        <button 
          className="sign-in-btn"
          onClick={() => openSignIn({})} // Open Clerk Sign In modal
        >
          Get Started
          <img src={assets.arrow_icon} alt="arrow" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
