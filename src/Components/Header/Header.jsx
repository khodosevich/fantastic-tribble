import React from 'react';
import s from "../../Styles/Header/Header.module.css"

const Header = () => {
    return (
        <div className={s.headerBar}>
            <p className={s.headerLogo}>khodosevich</p>
        </div>
    );
};

export default Header;