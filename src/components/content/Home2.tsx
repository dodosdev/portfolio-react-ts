import React from 'react';
import { Logo } from '@interfaces/common';

type HomeProps = {
    logo : Logo;
}

const Home2: React.FC<HomeProps> = ({logo}) => {
    return (
        <div>
            <section id="home">
                <img className="home__avatar" src={logo.img} alt="portfolio" />
                <h2 className="home__title">
                    <strong className="home__title--strong"> Frontend Developer</strong> {logo.name}</h2>
                <p className="home__description">I'm a Frontend developer with a passion for creating beautiful and responsive websites.</p>
                <a className = "home__contact" href="#contact">Contact Me</a>
            </section>
        </div>
    );
}

export default Home2; 