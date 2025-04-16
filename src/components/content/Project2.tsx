import React from 'react';
import { Project2 } from '@interfaces/common';

type Project2Props = {
    project : Project2;
}

const Project: React.FC<Project2Props> = ({project}) => {
    const { img, alt, title, description } = project;
    
    return (
        <>
            <img className="project__img" src={img} alt={alt} />
            <div className="project__metadata">
                <h3 className="project__metadata__title">{title}</h3>
                <p>{description}</p>
            </div>
        </>
    );
}

export default Project;