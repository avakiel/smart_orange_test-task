/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './Header.scss';
import { NavMenu } from '../Nav/NavMenu';

export const Header = () => {
  return (
    <div className='header'>
        <div className="header__content">
            <a href='/' className="header__content-logo"></a>
            <NavMenu
              containerClass='header__nav'
              itemsClass='header__nav__item'
            />
        </div>
    </div>
  )
}
