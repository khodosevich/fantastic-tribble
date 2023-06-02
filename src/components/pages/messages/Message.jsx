import React from 'react';
import s from "../../../styles/messages/Messages.module.css";

const Message = (props) => {
    return (
        <div key={props.id} className={s.message__item}>
            >   {props.text}
        </div>
    );
};

export default Message;