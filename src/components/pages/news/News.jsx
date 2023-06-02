import React from 'react';
import {Box, TextField} from "@mui/material";

const News = () => {

    let news = [
        {text:"chelsea is champion" , id: "1"},
        {text:"hello" , id: "2"},
        {text:"hello" , id: "3"},
        {text:"hello" , id: "4"}
    ]

    return (
        <Box
            sx={{
                backgroundColor:"#ffffff"
            }}
        >
            <Box
                sx={{
                    padding:"20px"
                }}
            >
                news 1
            </Box>
        </Box>


    );
};

export default News;