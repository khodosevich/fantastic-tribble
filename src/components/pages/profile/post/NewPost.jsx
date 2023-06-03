import React from 'react';
import classes from "../../../../styles/content/Content.module.css";
import {Button} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";



const NewPost = (props) => {

    let newPost = React.createRef();

    let addNewPost = () => {
        let text = newPost.current.value;

        if(text.length === 0){
            alert("length is 0! ");
        }

        if(text.length !== 0){
            console.log(text);
            props.dispatch(addPostActionCreator(text));
        }
        newPost.current.value = "";
    }

    let onPostChange = () => {
        let text =  newPost.current.value;

        props.dispatch(updateNewPostTextActionCreator(text));
        // props.dispatch(updateNewPostTextActionCreator(""));
    }

    return (
        <div>
            <div>
                <p className={classes.create__new__post} >create a new post:</p>
                <input
                    ref={newPost}
                    className={classes.input}
                    onChange={onPostChange}
                    placeholder="write something" type="text"/>
            </div>
            <div className={classes.submit__btn}>
                <Button
                    onClick={ addNewPost }
                    variant={"contained"} endIcon={<SendIcon />} >
                    new post
                </Button>
            </div>
        </div>
    );
};

export default NewPost;