import React from 'react';
import {Avatar, Box, Button} from "@mui/material";
import {followActionCreator, setUsersActionCreator, unFollowActionCreator} from "../../../redux/findFriendsReducer";
import axios from "axios";

import userPhoto from "../../../assets/img/149071.png"


class FindFriends extends React.Component {

    constructor(props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {

                this.props.dispatch(setUsersActionCreator(response.data.items));
            })
    }



    changeFollow = (userID) => {
        this.props.dispatch(unFollowActionCreator(userID));
    }

    changeUnFollow = (userID) => {
        this.props.dispatch(followActionCreator(userID));
    }


    render() {
        return( <Box sx={{
                backgroundColor:"#7f7da8",

            }}>

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
                        this.props.state.users.map((user) => (

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
                                            ? <Button variant="contained" onClick={ () => {this.changeFollow(user.id)}}>Unfollow</Button>
                                            : <Button variant="contained" onClick={ () => {this.changeUnFollow(user.id)}}>Follow</Button>
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

                <Box sx={{
                    display:"flex",
                    justifyContent:"center",
                    margin:"20px"
                }}>
                    <Button  onClick={this.getUsers} variant="contained" color="success">
                        Show more
                    </Button>
                </Box>
            </Box>
        );
    }

}


export default FindFriends;