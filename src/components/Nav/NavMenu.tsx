import React from "react";
import './NavMenu.scss';

interface NavMenuProps {
    containerClass?: string
    itemsClass?: string
}

export const NavMenu: React.FC<NavMenuProps> = ({containerClass, itemsClass}) => {
  return (
    <div className={`nav ${containerClass}`} >
      <div className={`nav__item ${itemsClass}`}>главная</div>
      <div className={`nav__item ${itemsClass}`}>галерея</div>
      <div className={`nav__item ${itemsClass}`}>проекты</div>
      <div className={`nav__item ${itemsClass}`}>сертификаты</div>
      <div className={`nav__item ${itemsClass}`}>контакты</div>
    </div>
  );
};
