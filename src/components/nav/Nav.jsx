import React, {useState} from 'react';
import s from "../../styles/nav/Nav.module.css"
import {Link, NavLink} from "react-router-dom";
import menuItems from "./links.json"

import friendSide from "./friends.json"

const Nav = (props) => {
    const [activeLink, setActiveLink] = useState(0);

    return (
        <div className={s.navbar }>
            <ul>
                {menuItems.map((link,index) => (
                    <li key={link.name} className={s.navbar__item}>
                        <NavLink onClick={() => setActiveLink(index)} className={`${ index === activeLink && `${s.active}`}`}  to={link.link}>{link.name}</NavLink>
                    </li>
                ))}
            </ul>
            <h3 className={s.title__friends}>My friends:</h3>
            <div className={s.friends}>
                {friendSide.map((x) => (
                        <div key={x.id} className={s.cards_items}>
                            <div className={s.card_item}>
                                <img className={s.photo_friend} src={x.photo} alt=""/>
                                <li>
                                    {x.name}
                                </li>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Nav;