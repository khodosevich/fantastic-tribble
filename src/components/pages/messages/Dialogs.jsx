import React from 'react';
import s from "../../../styles/messages/Messages.module.css";
import Dialog from "./Dialog";
import {Avatar} from "@mui/material";

const Dialogs = (props) => {
    return (
        <div>
            <div className={s.dialogs__item}>
                <div className="dialogs">
                    {props.state.map((user) => (
                        <div key={user.id} className={s.card_item}>
                            <div >
                                <Avatar
                                    sx={{
                                        width:"50px",
                                        height:"50px"
                                    }}
                                    alt="Remy Sharp" src={user.photo} />
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