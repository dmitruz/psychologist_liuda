import React, { useState } from 'react';
import './Header.scss';
import '../MobileMenu/MobileMenu.scss';
import logo from '../images/phone-call.svg';
import burgerMenu from '../images/burger-simple.svg';
import burgerSimple from '../images/burger-menu-right-svgrepo-com.svg';
import { MobileMenu } from '../MobileMenu/MobileMenu';

export const Header = () => {
    const [currentImage, setCurrentImage] = useState(burgerMenu);
    const [menuOpened, setMenuOpened] = useState(false);

    const handleImageClick = () => {
        setCurrentImage(currentImage === burgerSimple ? burgerMenu : burgerSimple);
        setMenuOpened(!menuOpened);
    };

    const handleCloseMenu = () => {
        setMenuOpened(false);
        setCurrentImage(burgerMenu);
    };

    return (
        <header className="header" id="home">
            <div className="logo__container">
                <a href="home" className="logo">
                    <img src={logo} alt="logoImg" className="logo__img" />
                </a>
            </div>
            <nav className="header__navigation">

                <a href="#menu" className="burger" onClick={handleImageClick}>
                    <img src={currentImage} alt="burgerMenu" className="burger__img" />

                </a>

                <div className="menu-content">
                    <a href="#about-me" className="menu-content__text">Про Мене</a>
                    <a href="#my-services" className="menu-content__text">Послуги та ціни</a>
                    <a href="#reviews" className="menu-content__text">Відгуки</a>
                    <a href="#contacts" className="menu-content__text">Контакти</a>
                </div>
            </nav>
            <div className="header__content">
                <h1 className="header__title">Психологиня</h1>
                <span className="header__subtitle">
                    Басс Людмила
                </span>
            </div>

            {menuOpened && (
                <MobileMenu handleCloseMenu={handleCloseMenu} />
            )}
        </header>
    )
}