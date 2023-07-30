import React from 'react';
import classes from "../../../styles/content/Content.module.css"
import Post from "./post/Post";
import UserInfo from "./user/UserInfo";
import NewPost from "./post/NewPost";
import UserBg from "./user/UserBg";
import {Box} from "@mui/material";
import Login from "../../login/Login";
import {Navigate} from "react-router";

const Profile = (props) => {


    return (<>

        {props.auth.isAuth
            ? <Box className={classes.content}>
                <UserBg/>
                <Box >
                    <UserInfo profile={props.profile} />
                    <Box className={classes.new__posts}>
                        <NewPost posts={props.state.posts} dispatch={props.dispatch} />
                    </Box>
                    <Box className={classes.old__posts}>
                        {
                            props.state.posts.map( (x) => (
                                <Post key={x.id} text={x.text} like={x.likes} id={x.id} />
                            ))
                        }
                    </Box>
                </Box>
            </Box>
            : <Navigate to={"/login"}/>
        }

    </>
    );
};

export default Profile;