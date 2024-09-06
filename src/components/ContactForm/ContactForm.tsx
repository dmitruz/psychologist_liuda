import './ContactForm.scss';

export const ContactForm = ({ handleCloseMenu }: { handleCloseMenu: () => void }) => {
    return (
        <div className="contact-form">
            <button className="close-menu" onClick={handleCloseMenu}>
                <h2 className="close-text">X</h2>
            </button>
            <form className="contact-form__form">
                <input type="text" placeholder="Ім'я" className="contact-form__input" />
                <input type="text" placeholder="Фамілія" className="contact-form__input" />
                <input type="email" placeholder="Електронна пошта" className="contact-form__input" />
                <input type="text" placeholder="Номер тел:" className="contact-form__input" />
                <textarea placeholder="Що саме цікавить?" className="contact-form__input" />
                <button type="submit" className="contact-form__button">Відправити</button>
            </form>
        </div>
    )
}