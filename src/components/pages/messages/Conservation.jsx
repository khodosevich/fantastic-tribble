import React from 'react';
import s from "../../../styles/messages/Messages.module.css";
import Message from "./Message";
import classes from "../../../styles/content/Content.module.css";
import {Box, Button} from "@mui/material";
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
            <div
                style={{
                    marginTop:"100px",
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center"
                }}
                className="addNewMessage">
                    <input
                        ref={newMessage}
                        className={classes.input} placeholder="write messages" type="text"/>
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