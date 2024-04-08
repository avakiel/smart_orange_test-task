/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */

import { useState } from "react";
import "../BurgerMenu/Burger.scss";
import { NavMenu } from "../Nav/NavMenu";


export const Burger = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("burger__menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    const newBurgerClass = isMenuClicked ? "burger-bar unclicked" : "burger-bar clicked";
    const newMenuClass = isMenuClicked ? "burger__menu hidden" : "burger__menu visible";
    document.body.style.overflow = !isMenuClicked ? "hidden" : "auto";

    setBurgerClass(newBurgerClass);
    setMenuClass(newMenuClass);
    setIsMenuClicked(!isMenuClicked);
  };



  return (
    <div className="burger__container">
      <nav className="burger__container-burger">
        <div className="burger" onClick={updateMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
      </nav>
      <div className={menuClass}>
        <NavMenu containerClass="burger__nav"/>
      </div>
    </div>
  );
};
