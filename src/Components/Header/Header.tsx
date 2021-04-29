import React from 'react';
import s from './Header.module.scss';
import Avatar from '../../assets/Avatar.jpg';
import { Link } from 'react-router-dom';

const links = [
    {
        name: 'About Me',
        link: '/',
    },
    {
        name: 'Education',
        link: '/education',
    },
    {
        name: 'Projects Examples',
        link: '/projects',
    },
    {
        name: 'Contacts',
        link: '/contacts',
    },
]

const Header = () => {
    return (
        <div className={s.root}>
            <div className={s.avatar}>
                <img className={s.avatar_img} src={Avatar} alt="Oops"/>
            </div>
            <nav className={s.links}>
                {
                    links.map((item) => (
                        <Link
                            className={s.link}
                            to={ item.link }
                        >
                            { item.name }
                        </Link>
                    ))
                }
            </nav>
        </div>
    )
}

export default Header;
