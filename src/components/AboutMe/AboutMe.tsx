import React from 'react';
import './AboutMe.scss';

export const AboutMe = () => {
    return (
        <section id="about-me" className="about-me">
            <h2 className="about-me__title">
                Коротко про мене
            </h2>
            <div className="about-me__content">
                <p className="about-me__text">
                    Мене звати Людмила. Я психолог,  арт-терапевт, та казкотерапевт.
                    Закінчила магістратуру на кафедрі психології та психотерапії, та маю понад 8 років безперевного досвіду роботи.
                </p>
            </div>
        </section>
    )
}