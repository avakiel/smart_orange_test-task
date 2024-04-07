import React from "react";
import './Button.scss';

interface ButtonProps {
  content?: string;
  arrowSide?: "left" | "right";
  containerClass?: string;
  itemClass?: string;
  contentClass?: string;
}

export const Button: React.FC<ButtonProps> = ({
  content,
  arrowSide,
  containerClass,
  itemClass,
  contentClass,
}) => {
  return (
    <div className={`button ${containerClass}`}>
      {arrowSide === "left" && (
        <div className={`button__item ${itemClass}`}>
          <span className="arrow arrow-rotate"></span>
        </div>
      )}
      <div className={`button__content ${contentClass}`}>{content}</div>
      {arrowSide === "right" && (
        <div className={`button__item ${itemClass}`}>
          <span className="arrow"></span>
        </div>
      )}
    </div>
  );
};
