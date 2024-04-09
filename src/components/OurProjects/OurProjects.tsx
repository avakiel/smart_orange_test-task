import React from "react";
import "./OurProjects.scss";
import { Button } from "../Button/Button";

export default function OurProjects() {
  return (
    <div className="ourProjects">
      <div className="ourProjects__title">Наши проекты</div>
      <div className="ourProjects__gallery">
        <div className="ourProjects__gallery__top">
          <div className="ourProjects__gallery__top-pic1 pic__content">
            <div className="pic__content__main pic__content-big">
              <div>
                ДОСУГОВЫЙ <br /> ЦЕНТР
              </div>
                <Button
                containerClass="pic__content__main-button"
                arrowSide="right"
                content="подробнее"
                />
            </div>
          </div>
          <div className="ourProjects__gallery__top-pic2 pic__content">
          <div className="pic__content__main pic__content-big">
              <div>
                ДОСУГОВЫЙ <br /> ЦЕНТР
              </div>
                <Button
                containerClass="pic__content__main-button"
                arrowSide="right"
                content="подробнее"
                />
            </div>
          </div>
        </div>
        <div className="ourProjects__gallery__bottom">
          <div className="ourProjects__gallery__bottom-pic1 pic__content">
          <div className="pic__content__main pic__content-small">
              <div>
                ДОСУГОВЫЙ <br /> ЦЕНТР
              </div>
                <Button
                containerClass="pic__content__main-button"
                arrowSide="right"
                content="подробнее"
                />
            </div>
          </div>
          <div className="ourProjects__gallery__bottom-pic2 pic__content">
          <div className="pic__content__main pic__content-small">
              <div>
                ДОСУГОВЫЙ <br /> ЦЕНТР
              </div>
                <Button
                containerClass="pic__content__main-button"
                arrowSide="right"
                content="подробнее"
                />
            </div>
          </div>
          <div className="ourProjects__gallery__bottom-pic3 pic__content">
          <div className="pic__content__main pic__content-small">
              <div>
                ДОСУГОВЫЙ <br /> ЦЕНТР
              </div>
                <Button
                containerClass="pic__content__main-button"
                arrowSide="right"
                content="подробнее"
                />
            </div>
          </div>
        </div>
      </div>
      <Button containerClass="ourProjects__button"  content="все проекты" arrowSide="right"/>
    </div>
  );
}
