import './MobileMenu.scss';
import downArrow from '../images/down-arrow-multimedia-option.svg';

export const MobileMenu = ({ handleCloseMenu }: { handleCloseMenu: () => void }) => {
    return (
        <div className="floating-menu">
            <button className="close-menu" onClick={handleCloseMenu}>X</button>
            <div className="menu-content">
                <p className="menu-content__text">Про Мене</p>
                <p className="menu-content__text">Послуги та ціни</p>
                <p className="menu-content__text">Відгуки</p>
                <p className="menu-content__text">Контакти
                </p>
                <img src={downArrow} alt="downArrow" className="menu-content__img" />
                <div className="menu__sociale">
                    <ul className="menu__sociale-list">
                        <li className="menu__sociale-item">Facebook</li>
                        <li className="menu__sociale-item">Facebook</li>
                        <li className="menu__sociale-item">Facebook</li>
                        <li className="menu__sociale-item">Facebook</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

