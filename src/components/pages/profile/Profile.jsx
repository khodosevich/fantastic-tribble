import React from 'react';
import classes from "../../../styles/content/Content.module.css"
import Post from "./post/Post";
import UserInfo from "./user/UserInfo";
import NewPost from "./post/NewPost";
import UserBg from "./user/UserBg";

const Profile = (props) => {

    return (
        <div className={classes.content}>
               <UserBg/>
                <div >
                    <UserInfo />
                    <div className={classes.new__posts}>
                      <NewPost posts={props.state.posts} dispatch={props.dispatch} />
                    </div>
                    <div className={classes.old__posts}>
                        {
                            props.state.posts.map( (x) => (
                            <Post text={x.text} like={x.likes} id={x.id} />
                            ))
                        }
                    </div>
            </div>
        </div>
    );
};

export default Profile;