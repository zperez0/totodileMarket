import React from "react";
import totodileImage from "./../img/totodile.png";

function Header(){
  return(
    <div classname="container">
    <React.Fragment>
    <img src={totodileImage} alt="An image of totodile" />
    </React.Fragment>
    </div>
  );
}

export default Header;