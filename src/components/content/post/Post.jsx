import React from 'react';
import classes from "../../../styles/content/post/Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.old__post__item}>
            <div>
                <p>{props.text}</p>
            </div>
            <div className={classes.like}>
                {props.like} likes
            </div>

        </div>
    );
};

export default Post;