import React from 'react';
import s from '../../../styles/messages/Messages.module.css'
import {NavLink} from "react-router-dom";
import Message from "./Message";

const Messages = () => {

    const dialogs = [
        {
            name: "Matvey",
            id: 1
        },
        {
            name: "Kirill",
            id: 2
        },    {
            name: "Maksim",
            id: 3
        }, {
            name: "Stas",
            id: 4
        },
        {
            name: "Ivan",
            id: 5
        },    {
            name: "Artem",
            id: 6
        }
    ]


    return (
        <div className={s.bg__messages}>
            <div className={s.dialogs__item}>
                {dialogs.map((user) => (
                    <Message id={user.id} name={user.name}/>
                ))}
            </div>

            <div className={s.messages}>
                <div className={s.message__item}>
                        hi
                </div>
                <div className={s.message__item}>
                        hey
                </div>
                <div className={s.message__item}>
                    how are you
                </div>
            </div>
        </div>
    );
};

export default Messages;