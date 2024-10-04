
import './MobileMenu.scss';
import downArrow from '../images/down-arrow-multimedia-option.svg';
import faceBook from '../images/facebook-round.svg';
import instaGram from '../images/instagram-round.svg';
import teleGram from '../images/telegram.svg';
import watsApp from '../images/whatsapp-whats-app.svg';
import linkedIn from '../images/linkedin-round.svg';
import gMail from '../images/gmail.svg';


export const MobileMenu = ({ handleCloseMenu }: { handleCloseMenu: () => void }) => {

    return (
        <div className="floating-menu">
            <button className="close-menu" onClick={handleCloseMenu}>
                <h2 className="close-text">X</h2>
            </button>
            <div className="menu-opened">
                <a href="#about-me" className="menu-content__text">Про Мене</a>
                <a href="#my-services" className="menu-content__text">Послуги та ціни</a>
                <a href="#reviews" className="menu-content__text">Відгуки</a>
                <a href="#contacts" className="menu-content__text">Контакти</a>
                <img src={downArrow} alt="downArrow" className="menu-content__img" />
                <div className="menu__sociale">
                    <ul className="menu__sociale-list">
                        <li className="menu__sociale-item">
                            <a href="www.facebook.com" className="menu__sociale-link" target="_blank" rel="noreferrer">
                                <img src={faceBook} alt="facebook" className="menu__sociale-img" />
                            </a>
                        </li>
                        <li className="menu__sociale-item">
                            <a href="www.facebook.com" className="menu__sociale-link" target="_blank" rel="noreferrer">
                                <img src={instaGram} alt="facebook" className="menu__sociale-img" />
                            </a>
                        </li>
                        <li className="menu__sociale-item">
                            <a href="https://t.me/bassliudmyla" className="menu__sociale-link" target="_blank" rel="noreferrer">
                                <img src={teleGram} alt="facebook" className="menu__sociale-img" />
                            </a>
                        </li>
                        <li className="menu__sociale-item">
                            <a href="https://wa.me/380986268243" className="menu__sociale-link" target="_blank" rel="noreferrer">
                                <img src={watsApp} alt="facebook" className="menu__sociale-img" />
                            </a>
                        </li>
                        <li className="menu__sociale-item">
                            <a href="www.facebook.com" className="menu__sociale-link" target="_blank" rel="noreferrer">
                                <img src={linkedIn} alt="facebook" className="menu__sociale-img" />
                            </a>
                        </li>
                        <li className="menu__sociale-item">
                            <a href="mailto:ludochkabass@gmail.com" className="menu__sociale-link" target="_blank" rel="noreferrer">
                                <img src={gMail} alt="facebook" className="menu__sociale-img" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

