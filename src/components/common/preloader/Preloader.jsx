import React from 'react';
import {Box} from "@mui/material";
import preloader from "../../../assets/preloader/preloader.svg";

const Preloader = (props) => {
    return (
        <Box>
            <img style={{width:"100%"}} src={preloader} alt="preloader"/>
        </Box>
    );
};

export default Preloader;