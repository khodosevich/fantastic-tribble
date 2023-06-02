import React from 'react';
import s from "../../../styles/messages/Messages.module.css";
import Message from "./Message";
import classes from "../../../styles/content/Content.module.css";
import {Box, Button} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {addNewMessagesActionCreator, newMessages} from "../../../redux/state";

const Conservation = (props) => {

    let currentValueMessages = props.state.newMessagesBody;

    let addNewMessage = () =>{
        props.dispatch(addNewMessagesActionCreator());
    }

    let sendRequestOnNewMessages = (e) => {
        let body = e.target.value;
        props.dispatch(newMessages(body));
    }

    return (
        <div className={s.messages}>
            {props.state.messages.map((user) => (
                <Message id={user.id} text={user.text}/>
            ))}
            <div
                style={{
                    marginTop:"100px",
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center"
                }}
                className="addNewMessage">
                    <input
                        className={classes.input}
                        value={currentValueMessages}
                        onChange={sendRequestOnNewMessages}
                        placeholder="write messages" type="text"/>
                    <Button
                        style={{
                            marginLeft:"20px"
                        }}

                        onClick={addNewMessage}
                        variant={"contained"} endIcon={<SendIcon />} >
                        send
                    </Button>
            </div>
        </div>
    );
};

export default Conservation;