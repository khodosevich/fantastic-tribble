import React, {useState} from 'react';
import {Avatar, Box, Button} from "@mui/material";
import friends from "./friends.json"

const FindFriends = () => {

    const [follow,setFollow] = useState(false);

    let changeFollow = () => {

    }

    return (
        <Box sx={{
            backgroundColor:"white"
        }}>
            FindFriends

           <Box sx={{
               display:"flex",
               flexDirection:"column",
               gap:"20px",
               alignItems:"center"
           }}>
                {
                  friends.map((user) => (

                      <Box sx={{
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
                              <Button
                                  onClick={() => setFollow(!follow)}
                                  variant="contained">
                                  {
                                      user.followed  ? "Follow" : "Unfollow"
                                  }
                              </Button>
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