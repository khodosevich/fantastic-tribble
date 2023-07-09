import React from 'react';
import s from "../../styles/header/Header.module.css"
import "../../styles/header/Header.module.css"
import { Box } from "@mui/material";
import {NavLink} from "react-router-dom";

const Header = (props) => {

    console.log(props.userInfo)

    return (
        <Box className={s.headerBar}>
            <p className={s.headerLogo}>khodosevich</p>
            <Box sx={{color:"white" , marginRight: "20px"}}>
                {
                    props.isAuth
                        ? props.userInfo.fullName
                        : <NavLink to='/login'>Login</NavLink>
                }
            </Box>
        </Box>
    );
};

export default Header;