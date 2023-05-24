import React, {useState} from 'react';
import s from "../../styles/nav/Nav.module.css"
import {Link, NavLink} from "react-router-dom";


const Nav = (props) => {
    const [activeLink, setActiveLink] = useState(0)
    const menuItems = [
        {
            name: "Profile",
            link: "/",
        },{
            name: "Messages",
            link: "/messages",
        }, {
            name: "News",
            link: "/News",
        }, {
            name: "Music",
            link: "/music",
        }, {
            name: "Setting",
            link: "/setting",
        }
    ]

    return (
        <div className={s.navbar }>
            <ul>
                {menuItems.map((link,index) => (
                    <li key={link.name} className={s.navbar__item}>
                        <NavLink onClick={() => setActiveLink(index)} className={`${ index === activeLink && `${s.active}`}`}  to={link.link}>{link.name}</NavLink>
                    </li>
                ))}
            </ul>


            <h3>My friends:</h3>
            <div className={s.friends}>

                {props.state.sideBar.friends.map((x) => (
                        <div className={s.cards_items}>
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