import React, {useState} from 'react';
import s from "../../../styles/messages/Messages.module.css";
import Message from "./Message";
import classes from "../../../styles/content/Content.module.css";
import {Button} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {addNewMessagesActionCreator, newMessages} from "../../../redux/dialogsReducer";

const Conservation = (props) => {

    const [currentValueMessages, setCurrentValueMessages] = useState('');

    let addNewMessage = () =>{
        props.dispatch(addNewMessagesActionCreator());
        setCurrentValueMessages("");
    }

    let sendRequestOnNewMessages = (e) => {
        let body = e.target.value;
        setCurrentValueMessages(e.target.value);
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