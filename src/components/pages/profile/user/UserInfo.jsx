import React from 'react';
import classes from "../../../../styles/content/user/User.module.css";

const UserInfo = () => {
    return (
        <div className={classes.user__info} >
            <div >
                <img className={classes.img__photo__user} src="https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg" alt=""/>
            </div>
            <div >
                <h3 className={classes.name__user}>Matvey Khodosevich</h3>
                <p className={classes.desc__name__user} >I am champion! </p>
            </div>

        </div>
    );
};

export default UserInfo;