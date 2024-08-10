
import faceBook from '../images/facebook-round.svg';
import instaGram from '../images/instagram-round.svg';
import teleGram from '../images/telegram.svg';
import watsApp from '../images/whatsapp-whats-app.svg';
import linkedIn from '../images/linkedin-round.svg';
import gMail from '../images/gmail.svg';
import '../MobileMenu/MobileMenu.scss';
import downArrow from '../images/down-arrow-multimedia-option.svg';

export const MyContacts = () => {
    return (
        <>
            <p className="menu-content__text">Зв'язок зі мною
            </p>
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
        </>
    )
}

export default MyContacts;