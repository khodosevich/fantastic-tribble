import React from 'react';
import classes from "../../../../styles/content/user/User.module.css";
import Preloader from "../../../common/preloader/Preloader";
import {Box , Typography} from "@mui/material";

import avatar from '../../../../assets/img/149071.png'

const UserInfo = (props) => {

    return (<>
            {props.profile === null ? <Preloader/>
                : <Box className={classes.user__info}>
                    <Box>
                        <img className={classes.img__photo__user}
                             src={props.profile.photos.large === null
                                 ? avatar
                                 : props.profile.photos.large }
                             alt="ava"
                        />
                    </Box>
                    <Box>
                        <Typography variant="h4" className={classes.name__user}>{props.profile.fullName}</Typography>
                        <p className={classes.desc__name__user}>{props.profile.aboutMe}</p>
                        <Typography variant="h5">{props.profile.lookingForAJobDescription}</Typography>
                        <Typography variant="h6">{props.profile.lookingForAJob ? "Ищу работу" : "Не ищу работу"}</Typography>
                    </Box>
                </Box>
            }
    </>
    );
};

export default UserInfo;