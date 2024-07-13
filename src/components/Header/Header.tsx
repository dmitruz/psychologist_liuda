import React from 'react';
import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header} id="home">
            <nav className={styles.header__navigation}>
                <a href="home" className={styles.logo}>
                    <img src="" alt="logoImg" className={styles.logo__img} />
                </a>
                <div className={styles.navigation__block}>
                    <a href="tel:+12345555555">
                        <span className={styles.phone__label}>+1 234 555-55-55</span>
                        <img
                            src="./images/phone-call.svg"
                            alt="Phone icon"
                            className={styles.phone__icon}
                        />
                    </a>
                    <a href="#menu" className={styles.burger}>
                        <span className={styles.burger__label}>Open menu</span>
                    </a>
                </div>
            </nav>
            <h1 className={styles.header__title}>Психологиня</h1>
            <span className={styles.header__subtitle}>
                Басс Людмила
            </span>
        </header>
    )
}