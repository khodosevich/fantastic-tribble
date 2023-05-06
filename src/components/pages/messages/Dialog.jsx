import s from "../../../styles/messages/Messages.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/messages/${props.id}`}>
                {props.name}
            </NavLink>
        </div>
    );
};

export default Dialog;