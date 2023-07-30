import React from 'react';
import s from '../../../styles/messages/Messages.module.css'
import Dialogs from "./Dialogs";
import Conservation from "./Conservation";
import {Box} from "@mui/material";
import Login from "../../login/Login";
import {Navigate} from "react-router";

const Messages = (props) => {


    return ( <>

        {props.authState.isAuth

            ?  <Box className={s.bg__messages}>
                <Dialogs state={props.state.dialogs}/>
                <Conservation dispatch={props.dispatch} state={props.state}  />
            </Box>

            : <Navigate to={"/login"}/>
        }
    </>
    );
};

export default Messages;