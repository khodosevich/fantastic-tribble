import React from 'react';
import classes from "../../Styles/Content/Content.module.css"
import Post from "./Post/Post";
import UserInfo from "./User/UserInfo";

const Content = () => {

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
                            <p>create a new post:</p>
                            <input placeholder="New post" className={classes.input__profile} type="text"/>
                        </div>

                        <div className={classes.submit__btn}>
                            <button onClick={hello} className={classes.submit}>
                                new post
                            </button>
                        </div>

                    </div>

                    <div className={classes.old__posts}>
                        <Post />
                        <Post />
                        <Post />
                    </div>
            </div>
        </div>
    );
};

export default Content;