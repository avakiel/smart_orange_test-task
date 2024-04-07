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
            <div className="about__main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatibus debitis laboriosam a eum ea deleniti, reiciendis nobis vel tenetur ut expedita incidunt quod, error distinctio hic molestiae laborum omnis pariatur assumenda! Facere vitae illo repellat pariatur, debitis architecto cupiditate necessitatibus sed ullam veniam qui cum, asperiores voluptatem iure in quae, labore commodi atque nihil molestias aliquam. Porro odit accusantium sunt culpa veritatis eaque, dolorem quidem animi recusandae, ratione officia?</div>
            <Button containerClass='about__main-button' content='читать' arrowSide='right' />
        </div>
    </div>
  )
}
