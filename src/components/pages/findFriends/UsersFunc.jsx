import React from 'react';
import {Avatar, Box, Button} from "@mui/material";
import x from "./findFriend.module.css";
import userPhoto from "../../../assets/img/149071.png";


const UsersFunc = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return (
        <Box sx={{
            backgroundColor:"#7f7da8",
        }}>

            <Box sx={{display:"flex",  justifyContent:"center", gap:"5px"}}>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p ? x.active : x.page}
                        style={{cursor:"pointer"}}
                        onClick={() => {
                            props.changePage(p)} }
                    >
                            {p}
                        </span>
                })}
            </Box>

            <Box sx={{
                display:"flex",
                justifyContent:"center",
                margin:"30px 0",
                fontWeight:"600",
                fontSize:"25px"
            }}>
                Find friends:
            </Box>

            <Box sx={{
                display:"flex",
                flexDirection:"column",
                gap:"20px",
                alignItems:"center"
            }}>
                {
                    props.users.map((user) => (

                        <Box key={user.id} sx={{
                            width:"500px",
                            background:"white",
                            padding:"20px",
                            color:"black",
                            borderRadius:"10px 20%"
                        }}>
                            <Box sx={{
                                marginBottom:"20px",
                                display:"flex",
                                justifyContent:"space-between"
                            }}>

                                <Avatar alt={user.name} src={user.photos.small != null ? user.photos.small : userPhoto } />

                                <Box>
                                    {user.followed
                                        ? <Button variant="contained" onClick={ () => {props.changeFollow(user.id)}}>Unfollow</Button>
                                        : <Button variant="contained" onClick={ () => {props.changeUnFollow(user.id)}}>Follow</Button>
                                    }
                                </Box>

                            </Box>

                            <Box>
                                {user.name}
                            </Box>
                            <Box sx={{
                                display:"flex",
                                justifyContent:"space-between",
                                marginTop:"10px",
                                alignItems:"center"
                            }}>
                                <Box>
                                    {user.status}
                                </Box>

                                <Box>
                                    Belarus
                                </Box>

                            </Box>
                        </Box>
                    ))
                }
            </Box>

        </Box>
    );
};

export default UsersFunc;