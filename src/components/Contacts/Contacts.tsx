import React from "react";
import "./Contacts.scss";

export const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts_title">Связаться с нами</div>
      <div className="contacts_content">
        <form className="contacts_content-form">
          <input placeholder="Имя" type="text" name="name" />
          <input
            type="tel"
            placeholder="Номер телефона"
            name="phone"
            required
          />
          <input type="email" placeholder="E-mail" name="email" required />
          <input
            type="text"
            placeholder="Интересующий товар/услуга"
            name="email"
          />
          <textarea placeholder="Сообщение" required />
        </form>
        <div className="contacts_content-gallery"></div>
      </div>
      <div className="contacts_content-check">
        <p>
          <input type="checkbox" />
          <span className="contacts_agr">Отправляя заявку Вы соглашаетесь с политикой конфиденциальности</span>
        </p>
      </div>
      <div className="contacts_button">
        <div>
          ОТПРАВИТЬ <span className="arrow"></span>
        </div>
      </div>
    </div>
  );
};
