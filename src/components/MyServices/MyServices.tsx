import React from 'react';
import './MyServices.scss';
import '../../styles/CallMeButton.scss';
import selfEsteam from '../images/self-esteam.jpg';

export const MyServices = () => {
    return (
        <section className="my-services">
            <h2 className="my-services__title">Мої послуги</h2>
            <div className="my-services__container">
                <p className="my-services__subtitle">Клієнтам:</p>
                <ul className="my-services__list">
                    <li className="my-services__text">Групові та індивідуальні заняття</li>
                </ul>
                <p className="my-services__subtitle">Колегам:</p>
                <ul className="my-services__list">
                    <li className="my-services__text">Індивідуальні та групові консультації</li>
                    <li className="my-services__text">Онлайн зустрічі для початківців</li>
                    <li className="my-services__text">Арт зустрічі</li>
                    <li className="my-services__text">Супровід психологів державних та приватних закладів</li>
                </ul>
            </div>
            <div className="request-service">
                <p className="my-services__subtitle">Запити:</p>
                <ul className="request-service__text">
                    <li className="request-service__item">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Qui, laborum quia cum fuga laboriosam cupiditate ipsam aut.
                    </li>
                    <li className="request-service__item">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Qui, laborum quia cum fuga laboriosam cupiditate ipsam aut.
                    </li>
                    <li className="request-service__item">
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
        </section>
    )
}