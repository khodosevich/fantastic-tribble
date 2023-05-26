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

            <div className="addNewMessage">

                <Box
                    sx={{
                        marginTop:"10px"
                }}>
                    <input
                        ref={newMessage}
                        className={classes.input} placeholder="write something" type="text"/>
                </Box>
                <Box sx={{
                    marginTop:"10px"
                }}>
                    <Button
                        onClick={addNewMessage}
                        variant={"contained"} endIcon={<SendIcon />} >
                        send
                    </Button>
                </Box>
            </div>

        </div>
    );
};

export default Conservation;