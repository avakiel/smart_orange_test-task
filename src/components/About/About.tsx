import React from 'react'
import './About.scss';
import { Button } from '../Button/Button';

export const About = () => {
  return (
    <div className='about'>
        <div className="about__gallery">
            <div className="about__gallery-img1"></div>
            <div className="about__gallery-img2"></div>
            <div className="about__gallery-container">
            <div className="about__gallery-img3"></div>
            </div>
        </div>
        <div className="about__main">
            <div className="about__main-title">О компании</div>
            <div className="about__main-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
            <Button containerClass='about__main-button' content='читать' arrowSide='right' />
        </div>
    </div>
  )
}
