import React from 'react';
import s from '../../../styles/messages/Messages.module.css'
import Dialog from "./Dialog";
import Message from "./Message";

const Messages = () => {

    const dialogs = [
        {name: "Matvey", id: 1},
        {name: "Kirill", id: 2},
        {name: "Maksim", id: 3},
        {name: "Stas", id: 4},
        {name: "Ivan", id: 5},
        {name: "Artem", id: 6}
    ]
    const messages = [
        {id:1 , text:"> hi"},
        {id:2 , text:"> yo"},
        {id:3 , text:"> how are you"},
        {id:4 , text:"> im nice , what about you?"},
        {id:5 , text:"> ohh, cool"},
        {id:6 , text:"> goodbye"},
        {id:7 , text:"> okay"},
    ]


    return (
        <div className={s.bg__messages}>
            <div className={s.dialogs__item}>
                {dialogs.map((user) => (
                    <Dialog id={user.id} name={user.name}/>
                ))}
            </div>

            <div className={s.messages}>
                {messages.map((user) => (
                    <Message id={user.id} text={user.text}/>
                ))}
            </div>
        </div>
    );
};

export default Messages;