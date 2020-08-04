import React, { useEffect, useState } from "react";
import Logo from "./images/logo3.png";
import Profile from "./images/profile2.png";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav px-3 ${show && "nav-black"}`}>
      <img className="nav-logo" src={Logo} width="100" height="50" />
      {/* <img className="nav-profile" src={Profile} width="35" height="35" /> */}
      <a
        href="https://www.github.com/khushwantkodecha"
        target="blank"
        style={{
          color: "red",
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        Fork Me On Github
      </a>
    </div>
  );
}

export default Nav;
