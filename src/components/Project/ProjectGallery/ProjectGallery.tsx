/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './ProjectGallery.scss';
import { Button } from '../../Button/Button';

interface PropsProjectGallery {
    gallery: string[];
    currentPage: number;
}

export const ProjectGallery: React.FC<PropsProjectGallery> = ({ gallery, currentPage }) => {
    return (
        <div className='projectGallery'>
            <img
                className='projectGallery-img'
                src={gallery[currentPage - 1]}
                alt={`Project Image ${currentPage}`}
            />
            <Button arrowSide='right' containerClass='projectGallery-button' content='взглянуть'/>
        </div>
    );
};