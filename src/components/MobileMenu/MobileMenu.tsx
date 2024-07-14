import './MobileMenu.scss';

export const MobileMenu = ({ handleCloseMenu }: { handleCloseMenu: () => void }) => {
    return (
        <div className="floating-menu">
            <button className="close-menu" onClick={handleCloseMenu}>X</button>
            <div className="menu-content">
                <p>Menu Content</p>
                <p>Menu Content</p>
                <p>Menu Content</p>
                <p>Menu Content</p>
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

