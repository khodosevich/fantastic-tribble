import React, {useState} from 'react';
import s from "../../../styles/messages/Messages.module.css";
import {NavLink} from "react-router-dom";

const Message = (props) => {


    return (
        <div className={s.dialog}>
            <NavLink to={`/messages/${props.id}`}>
                {props.name}
            </NavLink>
        </div>
    );
};

export default Message;