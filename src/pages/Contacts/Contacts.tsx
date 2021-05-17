import React from 'react';
import s from './Contacts.module.scss';

const Contacts = () => {
    return (
        <div className={s.root}>
            <div className={s.phone}>
                Phone number: <a href="tel:+380934737142">+(380)-93-47-37-142</a>
            </div>
            <div className={s.telegram}>
                Telegram: <a href="https://t.me/information_deleted" target="blank">@information_deleted</a>
            </div>
            <div className={s.mail}>
                Mail: <a href="mailto:pavelmg99@gmail.com">pavelmg99@gmail.com</a>
            </div>
            <div className={s.linkedin}>
                Linkedin: <a href="https://www.linkedin.com/in/%D0%BF%D0%B0%D0%B2%D0%B5%D0%BB-%D0%BC%D0%B0%D1%81%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-203b791a5/" target="blank">Pavel Maslovskyi</a>
            </div>
            <div className={s.git}>
                Git: <a href="https://github.com/PavelMGs">PavelMGs</a>
            </div>
        </div>
    )
}

export default Contacts;
