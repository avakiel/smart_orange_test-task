import React from "react";
import "./Footer.scss";
import { NavMenu } from "../Nav/NavMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faPinterest,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__main">
        <div className="footer__main-logo"></div>
        <div className="footer__main-menu">
          <p>Информация</p>
          <NavMenu
            containerClass="footer__main-menu-nav"
            itemsClass="footer__main-menu-item"
          />
        </div>
        <div className="footer__main-contacts">
          <p>Контакты</p>
          <div className="footer__main-contacts-adress contacts__content">
            <div className="logo"></div>
            <a
              href="https://www.google.com/maps?q=100000, Республика Казахстан, г. Караганда, ул. Телевизионная 10"
              target="_blank"
              rel="noreferrer"
            >
              <p>
                100000, Республика Казахстан, <br /> г. Караганда, ул.
                Телевизионная 10
              </p>
            </a>
          </div>
          <div className="footer__main-contacts-tel contacts__content">
            <div className="logo"></div>
            <a href="tel:+380000000000">+38 (000) 000 00 00</a>
          </div>
          <div className="footer__main-contacts-email contacts__content">
            <div className="logo"></div>
            <a href="mailto:mail@gmail.com">mail@gmail.com</a>
          </div>
        </div>
        <div className="footer__main-media">
          <p>Социальные сети</p>
          <div>
          <FontAwesomeIcon icon={faFacebookF} style={{ color: "white", height: '20px', cursor: 'pointer' }} />
          <FontAwesomeIcon icon={faTwitter} style={{ color: "white", height: '20px', cursor: 'pointer' }} />
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "white", height: '20px', cursor: 'pointer' }} />
          <FontAwesomeIcon icon={faPinterest} style={{ color: "white", height: '20px', cursor: 'pointer' }} /></div>
        </div>
      </div>
      <div className="footer__add">
        <div className="footer__add-text">
          © 2019 Digital Project. Все права защищены.
        </div>
      </div>
    </div>
  );
};
