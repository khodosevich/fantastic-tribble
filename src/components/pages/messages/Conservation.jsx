import React from 'react';
import s from "../../../styles/messages/Messages.module.css";
import Message from "./Message";
import classes from "../../../styles/content/Content.module.css";
import {Button} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Conservation = (props) => {

    let newMessage = React.createRef();

    let addNewMessage = () =>{
        alert(newMessage.current.value);
    }

    return (
        <div className={s.messages}>
            {props.state.map((user) => (
                <Message id={user.id} text={user.text}/>
            ))}

            <div className="addNewMessage">
                <input
                    ref={newMessage}
                    className={classes.input} placeholder="write something" type="text"/>
                <Button
                    onClick={addNewMessage}
                    variant={"contained"} endIcon={<SendIcon />} >
                    send
                </Button>
            </div>

        </div>
    );
};

export default Conservation;