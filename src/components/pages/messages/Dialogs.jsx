import React from 'react';
import s from "../../../styles/messages/Messages.module.css";
import Dialog from "./Dialog";

const Dialogs = (props) => {
    return (
        <div>
            <div className={s.dialogs__item}>
                <div className="dialogs">
                    {props.state.map((user) => (
                        <div className={s.card_item}>
                            <div className={s.photo}>
                                <img className={s.img} src={user.photo} alt=""/>
                            </div>
                            <Dialog id={user.id} name={user.name}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dialogs;