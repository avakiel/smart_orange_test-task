import React from "react";
import "./OurProjects.scss";
import { Button } from "../Button/Button";

export default function OurProjects() {
  return (
    <div className="ourProjects">
      <div className="ourProjects_title">Наши проекты</div>
      <div className="ourProjects_gallery">
        <div className="ourProjects_gallery-top">
          <div className="ourProjects_gallery-top-pic1 pic__content">
            <div className="pic__content-main pic__content-big">
              <div>
                ДОСУГОВЫЙ <br /> ЦЕНТР
              </div>
                <Button
                containerClass="pic__content-main-button"
                arrowSide="right"
                content="подробнее"
                />
            </div>
          </div>
          <div className="ourProjects_gallery-top-pic2 pic__content">
          <div className="pic__content-main pic__content-big">
              <div>
                ДОСУГОВЫЙ <br /> ЦЕНТР
              </div>
                <Button
                containerClass="pic__content-main-button"
                arrowSide="right"
                content="подробнее"
                />
            </div>
          </div>
        </div>
        <div className="ourProjects_gallery-bottom">
          <div className="ourProjects_gallery-bottom-pic1 pic__content">
          <div className="pic__content-main pic__content-small">
              <div>
                ДОСУГОВЫЙ <br /> ЦЕНТР
              </div>
                <Button
                containerClass="pic__content-main-button"
                arrowSide="right"
                content="подробнее"
                />
            </div>
          </div>
          <div className="ourProjects_gallery-bottom-pic2 pic__content">
          <div className="pic__content-main pic__content-small">
              <div>
                ДОСУГОВЫЙ <br /> ЦЕНТР
              </div>
                <Button
                containerClass="pic__content-main-button"
                arrowSide="right"
                content="подробнее"
                />
            </div>
          </div>
          <div className="ourProjects_gallery-bottom-pic3 pic__content">
          <div className="pic__content-main pic__content-small">
              <div>
                ДОСУГОВЫЙ <br /> ЦЕНТР
              </div>
                <Button
                containerClass="pic__content-main-button"
                arrowSide="right"
                content="подробнее"
                />
            </div>
          </div>
        </div>
      </div>
      <Button containerClass="ourProjects_button"  content="все проекты" arrowSide="right"/>
    </div>
  );
}
