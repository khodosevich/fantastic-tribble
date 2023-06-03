import React from 'react';
import s from '../../../styles/messages/Messages.module.css'
import Dialogs from "./Dialogs";
import Conservation from "./Conservation";

const Messages = (props) => {
    return (
        <div className={s.bg__messages}>
            <Dialogs state={props.state.dialogs}/>
            <Conservation dispatch={props.dispatch} state={props.state}  />
        </div>
    );
};

export default Messages;