import React from 'react';
import classes from "../../../Styles/Content/Post/Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.old__post__item}>
            <p>{props.text}</p>
        </div>
    );
};

export default Post;