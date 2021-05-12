import React from 'react';
import s from './AboutMe.module.scss';

const AboutMe = () => {
    return (
        <div className={s.root}>

            <article>
            Hi, im Pavel. I am a young FrontEnd developer (React) from Kiev, born in 1999.
                I started learning Web Development in February 2020 by reading a tutorial at <a href="http://learn.javascript.com/"> learn.javascript.com </a>.
                I decided to create this site to make my resume more interesting.
                More info you can find in the relevant sections of the navigation menu.
            </article>

        </div>
    )
}

export default AboutMe;
