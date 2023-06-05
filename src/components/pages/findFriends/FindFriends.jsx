import React from 'react';
import {Avatar, Box, Button} from "@mui/material";
import {followActionCreator, setUsersActionCreator, unFollowActionCreator} from "../../../redux/findFriendsReducer";

const FindFriends = (props) => {


    let changeFollow = (userID) => {
        props.dispatch(unFollowActionCreator(userID));
    }

    let changeUnFollow = (userID) => {
        props.dispatch(followActionCreator(userID));
    }

    let setUsers = (users) => {
        props.dispatch(setUsersActionCreator(users));
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
                              <Avatar alt={user.name} src={user.img} />
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
                                  {user.country}
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