import React from "react";
import "./Header.css";
import Typewriter from "typewriter-effect";
const Header = () => {
  return (
    <div className="Header-parent-div">
      <h1>
        <Typewriter
          options={{
            autoStart: true,
            poop: true,
            delay: 50,
            strings: "Welcome to our website",
          }}
        />
      </h1>
    </div>
  );
};
export default Header;
