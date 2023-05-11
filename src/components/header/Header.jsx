import React, {useState} from 'react';
import s from "../../styles/header/Header.module.css"
import "../../styles/header/Header.module.css"

const Header = () => {

    return (
        <div className={s.headerBar}>
            <p className={s.headerLogo}>khodosevich</p>
            <div className={s.login}>
                login
            </div>
        </div>
    );
};

export default Header;