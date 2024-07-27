import React from 'react';
import './AboutMe.scss';

export const AboutMe = () => {
    return (
        <section className="about-me">
            <h2 className="about-me__title">
                Коротко про мене
            </h2>
            <div className="about-me__content">
                <p className="about-me__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
        </section>
    )
}