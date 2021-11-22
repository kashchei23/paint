import React from "react";
import Title from '../images/BigLogoBackground.svg'

const Header = () => {
  return (
    <div >
    <div className="title-background"></div>
    <div className="second-title-bg"></div>
      <img className="title" src={Title} alt="DarLey Paint"/>
    </div>
  )
}

export default Header;