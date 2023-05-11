import React, {useState} from 'react';
import classes from "../../../../styles/content/Content.module.css";
import {Button} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const NewPost = () => {


    return (
        <div>
            <div>
                <p className={classes.create__new__post} >create a new post:</p>
                <input className={classes.input} placeholder="write something" type="text"/>
            </div>

            <div className={classes.submit__btn}>
                <Button
                    variant={"contained"} endIcon={<SendIcon />} >
                    new post
                </Button>
            </div>
        </div>
    );
};

export default NewPost;