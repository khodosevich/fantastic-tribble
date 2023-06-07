import React, {useEffect} from 'react';
import {Avatar, Box, Button} from "@mui/material";
import {followActionCreator, setUsersActionCreator, unFollowActionCreator} from "../../../redux/findFriendsReducer";
import axios from "axios";

import userPhoto from "../../../assets/img/149071.png"

const FindFriends = (props) => {


    if(props.state.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {

                props.dispatch(setUsersActionCreator(response.data.items));
            })

    }

    let changeFollow = (userID) => {
        props.dispatch(unFollowActionCreator(userID));
    }

    let changeUnFollow = (userID) => {
        props.dispatch(followActionCreator(userID));
    }



    return (
        <Box sx={{
            backgroundColor:"white"
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
                  props.state.users.map((user) => (

                      <Box key={user.id} sx={{
                          width:"500px",
                          background:"black",
                          padding:"20px",
                          color:"white"
                      }}>
                          <Box sx={{
                              marginBottom:"20px",
                              display:"flex",
                              justifyContent:"space-between"
                          }}>
                              <Avatar alt={user.name} src={user.photos.small != null ? user.photos.small : userPhoto } />
                              <Box>
                                  {user.followed
                                      ? <Button variant="contained" onClick={ () => {changeFollow(user.id)}}>Unfollow</Button>
                                      : <Button variant="contained" onClick={ () => {changeUnFollow(user.id)}}>Follow</Button>
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
                                  {/*{user.country}*/}
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
                <Button variant="contained" color="success">
                    Show more
                </Button>
            </Box>
        </Box>


    );
};

export default FindFriends;