import React, { useState } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import './MyServices.scss';
import '../../styles/CallMeButton.scss';
import './ModalOverlay.scss';
import consultation from '../images/consultation.png';
import selfEsteam from '../images/self-esteam.jpg';
import familyKid from '../images/family.png';
import family1 from '../images/family1.png';
import family2 from '../images/family2.png';
import family3 from '../images/family3.png';

export const MyServices = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section id="my-services" className="my-services">
            <h2 className="my-services__title">Мої послуги</h2>
            <div className="my-services__wrapper">
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
                <div className="image-container">
                    <img src={consultation} style={{ width: 490 }} alt="self" />
                </div>
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
                    <button className="call-me__btn" onClick={handleOpenModal}>
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
                    <p className="kids-service__text">
                        Вікові особливості: <br />
                        Криза школяра молодше 6 років, підліткова криза
                    </p>
                    <span className="kids-service__description">
                        Підліткова криза — це складний період у житті кожної молодої людини, коли відбуваються значні психологічні, фізичні та соціальні зміни. Цей етап характеризується пошуком власної ідентичності, незалежності від батьків, а також формуванням цінностей і світогляду. Підлітки стикаються з викликами, такими як тиск однолітків, потреба відповідати очікуванням суспільства та швидкі зміни у власному тілі й свідомості. Це може викликати роздратування, агресію, замкнутість, або навпаки — надмірну соціальну активність.
                    </span>
                </div>
                <div className="kids-service__wrapper">
                    <div className="kids-service__block">
                        <img src={familyKid} className="family-img" alt="family" />

                    </div>
                </div>

                <div className="kids-service__container">
                    <p className="kids-service__text">
                        Замкнутість та підозрілість, втрата контакту з дорослими.
                    </p>
                    <span className="kids-service__description">
                        Замкнутість — це стан, коли дитина свідомо обмежує доступ до свого внутрішнього світу. Це не просто тиша в кімнаті, а відмова ділитися переживаннями, думками та планами. Дитина наче «йде в себе», вибудовуючи стіну, щоб захистити свою вразливість від зовнішнього тиску або болю.
                        <br />
                        Підозрілість — це стан хронічної недовіри до мотивів оточуючих, зокрема дорослих. Будь-яке запитання батьків («Як справи?», «Що ти робиш?») сприймається дитиною не як турбота, а як допит, контроль або спроба знайти привід для критики. В основі підозрілості часто лежить страх бути невизнаним або покараним.
                    </span>
                </div>
                <div className="kids-service__wrapper">
                    <div className="kids-service__block">
                        <img src={family2} className="family-img" alt="family" />

                    </div>
                </div>

                <div className="kids-service__container">
                    <p className="kids-service__text">
                        Залежність від гаджетів та соціальних мереж.
                    </p>
                    <span className="kids-service__description">
                        Залежність від гаджетів та соцмереж (цифрова адикція) — це нав’язливе використання цифрових пристроїв, яке стає пріоритетним над усіма іншими сферами життя. Це стан, коли дитина втрачає контроль над часом у мережі, а реальне життя (навчання, спорт, спілкування з родиною) починає викликати нудьгу або роздратування.

                    </span>
                </div>
                <div className="kids-service__wrapper">
                    <div className="kids-service__block">
                        <img src={family3} className="family-img" alt="family" />

                    </div>
                </div>

                <div className="kids-service__container">
                    <p className="kids-service__text">
                        Втрата інтересу до спілкування.
                    </p>
                    <span className="kids-service__description">
                        Втрата інтересу до спілкування (соціальна відстороненість) — це стан, при якому дитина або підліток свідомо уникає контактів з однолітками та близькими, втрачає задоволення від розмов і прагне до самотності. Це не просто риса характеру (як-от інтроверсія), а зміна поведінки, що часто свідчить про внутрішній дискомфорт.
                    </span>
                </div>
                <div className="kids-service__wrapper">
                    <div className="kids-service__block">
                        <img src={familyKid} className="family-img" alt="family" />

                    </div>
                </div>
                <div className="kids-service__container">
                    <p className="kids-service__text">
                        Погіршення успішності у школі
                    </p>
                    <span className="kids-service__description">
                        Зниження шкільної успішності — це симптом, який вказує на втрату дитиною адаптивних можливостей. Це стан, коли через емоційне вигорання, стрес, конфлікти або когнітивні особливості школяр не може реалізувати свій потенціал, що проявляється у втраті мотивації та падінні балів.
                    </span>
                </div>
                <div className="kids-service__wrapper">
                    <div className="kids-service__block">
                        <img src={family1} className="family-img" alt="family" />


                        <div className="call-me">
                            <button className="call-me__btn" onClick={handleOpenModal}>
                                <span className="call-me__text">
                                    Зв'язок зі мною
                                </span>
                            </button>
                        </div>
                    </div>




                </div>
            </section>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <ContactForm handleCloseMenu={handleCloseModal} />
                    </div>
                </div>
            )}

        </section>
    )
}