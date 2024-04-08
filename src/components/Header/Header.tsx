/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from 'react';
import './Header.scss';
import { NavMenu } from '../Nav/NavMenu';
import { Burger } from '../BurgerMenu/Burger';

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='header'>
        <div className="header__content">
            <a href='/' className="header__content-logo"></a>
            {isMobile ? <Burger /> :
            <NavMenu
              containerClass='header__nav'
              itemsClass='header__nav__item'
            />}
        </div>
    </div>
  )
}
