
export const Header = () => {
    return (
        <header>
            <nav>
                <a href="#">
                    <img src="" alt="logoImg" />
                </a>
                <div>
                    <a href="tel:+12345555555" className="phone">
                        <span className="phone__label">+1 234 555-55-55</span>
                        <img
                            src="./icons/phone.svg"
                            alt="Phone icon"
                            className="phone__icon"
                        />
                    </a>
                    <a href="#menu" className="burger">
                        <span className="burger__label">Open menu</span>
                    </a>
                </div>
            </nav>
        </header>
    )
}