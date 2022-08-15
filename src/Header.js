import React from "react";
import "./Header.css";
import headerLogo from "./images/ssr-blacklogo 3.png";
import "@fontsource/zen-tokyo-zoo";

function Header() {
  return (
    <div className="header">
      <div className="headerText">
        Secret <br />
        Shop <br />
        Rawis
      </div>
      <div className="headerLogo">
        <img src={headerLogo} alt="ssr-logo" />
      </div>
    </div>
  );
}

export default Header;
