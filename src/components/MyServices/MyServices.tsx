import React from 'react';
import './MyServices.scss';
import '../../styles/CallMeButton.scss';
import selfEsteam from '../images/self-esteam.jpg';

export const MyServices = () => {
    return (
        <section className="my-services">
            <div className="my-services__container">
                <h2 className="my-services__title">Мої послуги</h2>
                <div className="my-services__box">
                    <p className="my-services__subtitle">Самооцінка</p>
                    <ul className="my-services__text">
                        <li className="my-services__item">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Qui, laborum quia cum fuga laboriosam cupiditate ipsam aut.
                        </li>
                        <li className="my-services__item">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Qui, laborum quia cum fuga laboriosam cupiditate ipsam aut.
                        </li>
                        <li className="my-services__item">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Qui, laborum quia cum fuga laboriosam cupiditate ipsam aut.
                        </li>
                    </ul>
                </div>

                <img src={selfEsteam} className="self-img" alt="self" />
                <div className="call-me">
                    <button className="call-me__btn">
                        <span className="call-me__text">
                            Зв'язок зі мною
                        </span>
                    </button>

                </div>
            </div>
        </section>
    )
}