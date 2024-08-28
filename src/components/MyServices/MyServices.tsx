import React from 'react';
import './MyServices.scss';
import '../../styles/CallMeButton.scss';
import selfEsteam from '../images/self-esteam.jpg';
import familyKid from '../images/family.png';

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
                        Адаптація у новій країні
                    </li>
                    <li className="request-service__item">
                        Пошук себе та професiй
                    </li>
                    <li className="request-service__item">
                        Тайм-менеджемент та коучинг
                    </li>
                    <li className="request-service__item">
                        Розлучення (супровід сім'ї)
                    </li>
                    <li className="request-service__item">
                        Самооцінка та впевненість у собі
                    </li>
                </ul>
                <div className="call-me">
                    <button className="call-me__btn">
                        <span className="call-me__text">
                            Зв'язок зі мною
                        </span>
                    </button>
                </div>
            </div>

            <img src={selfEsteam} className="self-img" alt="self" />

            <section className="kids-service">
                <p className="kids-service__subtitle">Дітям та підліткам:</p>
                <div className="kids-service__container">
                    <ul className="kids-service__text">
                        <li className="kids-service__item">
                            Вікові особливості: криза школяра молодше 6 років, підліткова криза
                        </li>
                        <li className="kids-service__item">
                            Погіршення успішності у школі
                        </li>
                        <li className="kids-service__item">
                            Втрата інтересу до спілкування
                        </li>
                        <li className="kids-service__item">
                            Замкнутість та підозрілість, втрата контакту з дорослими
                        </li>
                        <li className="kids-service__item">
                            Залежність від гаджетів та соціальних мереж
                        </li>
                    </ul>
                </div>
                <img src={familyKid} className="family-img" alt="family" />
                <div className="call-me">
                    <button className="call-me__btn">
                        <span className="call-me__text">
                            Зв'язок зі мною
                        </span>
                    </button>
                </div>
            </section>

        </section>
    )
}