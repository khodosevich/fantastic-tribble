import React, {useEffect} from 'react';
import classes from "../../../../styles/content/user/User.module.css";
import Preloader from "../../../common/preloader/Preloader";
import {Box , Typography} from "@mui/material";

const UserInfo = (props) => {

    return (<>
            {props.profile === null ? <Preloader/>
                : <Box className={classes.user__info}>
                    <Box>
                        <img className={classes.img__photo__user} src={props.profile.photos.large} alt="ava"/>
                    </Box>
                    <Box>
                        <Typography variant="h4" className={classes.name__user}>{props.profile.fullName}</Typography>
                        <p className={classes.desc__name__user}>{props.profile.aboutMe}</p>
                        <Typography variant="h6">{props.profile.lookingForAJobDescription}</Typography>
                    </Box>
                </Box>
            }
    </>
    );
};

export default UserInfo;