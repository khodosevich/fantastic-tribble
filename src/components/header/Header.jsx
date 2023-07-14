import React from 'react';
import s from "../../styles/header/Header.module.css"
import "../../styles/header/Header.module.css"
import {Box, Button} from "@mui/material";
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <Box className={s.headerBar}>

            <p className={s.headerLogo}>khodosevich</p>

            <Box sx={{color:"white" , marginRight: "20px", display:"flex" , alignItems:"center" , gap:"20px" }}>
                {
                    props.isAuth
                        ? props.userInfo.fullName
                        : <NavLink to='/login'>Login</NavLink>
                }

                <Box>
                    <Button variant="contained">
                        log out
                    </Button>
                </Box>
            </Box>

        </Box>
    );
};

export default Header;