import React from 'react';
import { Testimonial } from '@interfaces/common';

type Testimonial2Props = {
    testimonial : Testimonial
}

const Testimonial2: React.FC<Testimonial2Props> = ({testimonial}) => {
    const {img, alt, description, name, company} = testimonial;

    return (
        <>
            <img className="testimonial__img" src={img} alt={alt} />
            <div className="testimonial__bubble">
                <p>{description}</p>
                <p><a href="#" className="testimonial__bubble__name">{name}</a> / {company}</p>
            </div>
        </>
    );
}

export default Testimonial2;

