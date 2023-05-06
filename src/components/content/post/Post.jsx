import React, {useState} from 'react';
import classes from "../../../styles/content/post/Post.module.css";

const Post = (props) => {

    let likes = props.like;

    const [like,setLike] = useState(false);
    const [activeLike,setActiveLike] = useState(props.like);

    const addLike = () => {
        if(like){
            setLike(!like);
            setActiveLike(activeLike-1);
        }else{
            setLike(!like);
            likes++;
            setActiveLike(likes);
        }
    }



    return (
        <div className={classes.old__post__item}>
            <div>
                <p>{props.text}</p>
            </div>
            <div
                onClick={ () => addLike()} className={classes.like}>
                {activeLike} likes
            </div>

        </div>
    );
};

export default Post;