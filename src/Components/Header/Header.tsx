import React, { useEffect, useReducer } from 'react';
import s from './Header.module.scss';
import Avatar from '../../assets/Avatar.jpg';
import { Link, useLocation } from 'react-router-dom';

const links = [
    {
        name: 'About Me',
        link: '/',
        current: true,
        key: 0,
    },
    {
        name: 'Education',
        link: '/education',
        current: false,
        key: 1,
    },
    {
        name: 'Projects Examples',
        link: '/projects',
        current: false,
        key: 2,
    },
    {
        name: 'Contacts',
        link: '/contacts',
        current: false,
        key: 3,
    },
]

const Header = () => {
    const location = useLocation();
    const [updater, forceUpdate] = useReducer(x => x + 1, 0);

    useEffect(() => {
        let isStartPage = true;
        links.map(item => {
            if (location.pathname.match(item.link)) {
                item.current = true
                item.link !== '/'
                ? isStartPage = false
                : isStartPage = true;
            } else item.current = false;
        })
        isStartPage ? links[0].current = true : links[0].current = false;
        forceUpdate();
    }, [location]);

    return (
        <div className={s.root}>
            <div className={s.avatar}>
                <img className={s.avatar_img} src={Avatar} alt="Oops"/>
            </div>
            <nav className={s.links}>
                {
                    links.map((item) => (
                        <Link
                            className={item.current ? `${s.current_link} ${s.link}` : s.link}
                            to={ item.link }
                            key={item.key}
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
