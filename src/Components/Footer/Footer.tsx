import React from 'react';
import s from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={s.root}>
            <div className={s.toggle} />
            <div className={s.content}>
                2021
            </div>
        </div>
    )
}

export default Footer;
