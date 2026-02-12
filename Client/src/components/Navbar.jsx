import React from "react";
import { assets } from "../assets/assets";
import "./Navbar.css"; 
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn } = useUser();

  const credits = 0; // ✅ TEMP value (baad me context / backend se ayega)

  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="logo" />

      {isSignedIn ? (
        <>
          <div>
            <button>
              <img src={assets.credit_icon} alt="" />
              <p>Credits: {credits}</p>
            </button>
          </div>

          <UserButton />
        </>
      ) : (
        <button
          className="sign-in-btn"
          onClick={() => openSignIn({})}
        >
          Get Started
          <img src={assets.arrow_icon} alt="arrow" />
        </button>
      )}
    </div>
  );
};

export default Navbar;

