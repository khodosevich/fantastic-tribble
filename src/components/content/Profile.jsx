import React from 'react';
import classes from "../../styles/content/Content.module.css"
import Post from "./post/Post";
import UserInfo from "./user/UserInfo";
import NewPost from "./post/NewPost";
import UserBg from "./user/UserBg";

const Profile = () => {


    return (
        <div className={classes.content}>
               <UserBg/>
                <div >
                    <UserInfo />
                    <div className={classes.new__posts}>
                      <NewPost/>
                    </div>

                    <div className={classes.old__posts}>
                        <Post text='hello, my name is Matvey' like='100'/>
                        <Post text='post 2' like='0' />
                        <Post text='post 3' like='10'/>
                        <Post text='react course it kamasutra' like='42'/>
                        <Post text='post 5' like='1'/>
                    </div>
            </div>
        </div>
    );
};

export default Profile;