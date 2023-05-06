import React from 'react';
import classes from "../../styles/content/Content.module.css"
import Post from "./post/Post";
import UserInfo from "./user/UserInfo";
import {Button } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

const Profile = () => {

    const hello = () => {
        console.log('hello');
    }


    return (
        <div className={classes.content}>
                <div>
                    <img src="https://media.istockphoto.com/id/1035676256/photo/background-of-galaxy-and-stars.jpg?s=612x612&w=0&k=20&c=dh7eWJ6ovqnQZ9QwQQlq2wxqmAR7mgRlQTgaIylgBwc=" alt="" className={classes.img__content}/>
                </div>
                <div >

                    <UserInfo />

                    <div className={classes.new__posts}>

                        <div>
                            <p className={classes.create__new__post} >create a new post:</p>
                            <input className={classes.input} placeholder="write something" type="text"/>
                        </div>

                        <div className={classes.submit__btn}>
                            <Button variant={"contained"} endIcon={<SendIcon />} onClick={hello} >
                                new post
                            </Button>
                        </div>

                    </div>

                    <div className={classes.old__posts}>

                        <Post text='post 1' like='100'/>
                        <Post text='post 2' like='0' />
                        <Post text='post 3' like='10'/>
                        <Post text='post 4' like='42'/>
                        <Post text='post 5' like='1'/>

                    </div>
            </div>
        </div>
    );
};

export default Profile;