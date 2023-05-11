import React from 'react';
import classes from "../../../styles/content/Content.module.css"
import Post from "./post/Post";
import UserInfo from "./user/UserInfo";
import NewPost from "./post/NewPost";
import UserBg from "./user/UserBg";

const Profile = () => {

    let posts = [
        {
            text:'hello, my name is Matvey',
            likes:'100',
            id: 0
        },
        {
            text:'post 2',
            likes:'166',
            id: 1
        },
        {
            text:'post 3',
            likes:'11',
            id: 2
        },
        {
            text:'hello',
            likes:'133',
            id: 3

        },
        {
            text:'post 4',
            likes:'90',
            id: 4
        },
        {
            text:'post 5',
            likes:'0',
            id: 5
        }
    ]


    return (
        <div className={classes.content}>
               <UserBg/>
                <div >
                    <UserInfo />
                    <div className={classes.new__posts}>
                      <NewPost/>
                    </div>

                    <div className={classes.old__posts}>
                        {
                            posts.map( (x) => (
                            <Post text={x.text} like={x.likes} id={x.id} />
                            ))
                        }

                    </div>
            </div>
        </div>
    );
};

export default Profile;