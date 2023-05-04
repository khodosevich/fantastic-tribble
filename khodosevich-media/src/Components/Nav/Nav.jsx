import React from 'react';
import s from "../../Styles/Nav/Nav.module.css"



const Nav = () => {
    return (
        <div className={s.navbar}>
            <ul>
                <li className={`${s.navbar__item} ${s.active}` }>
                    <a href="">Profile</a>
                </li>
                <li className={s.navbar__item}>
                    <a href="">News</a>
                </li>
                <li className={s.navbar__item}>
                    <a href="">Messages</a>
                </li>
                <li className={s.navbar__item}>
                    <a href="">Music</a>
                </li>
                <li className={s.navbar__item}>
                    <a href="">Settings</a>
                </li>
            </ul>
        </div>
    );
};

export default Nav;