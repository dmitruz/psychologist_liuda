import React, { useState } from 'react';
import './Header.scss';
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
        setCurrentImage(burgerSimple);
    };

    return (
        <header className="header" id="home">
            <nav className="header__navigation">
                <a href="home" className="logo">
                    <img src={logo} alt="logoImg" className="logo__img" />
                </a>

                <a href="#menu" className="burger" onClick={handleImageClick}>
                    <img src={currentImage} alt="burgerMenu" className="burger__img" />

                </a>
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