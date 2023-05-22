import React from 'react';
import s from '../../../styles/messages/Messages.module.css'
import Dialog from "./Dialog";
import Message from "./Message";

const Messages = (props) => {


    return (
        <div className={s.bg__messages}>
            <div className={s.dialogs__item}>
                {props.state.dialogs.map((user) => (
                    <Dialog id={user.id} name={user.name}/>
                ))}
            </div>

            <div className={s.messages}>
                {props.state.messages.map((user) => (
                    <Message id={user.id} text={user.text}/>
                ))}
            </div>
        </div>
    );
};

export default Messages;