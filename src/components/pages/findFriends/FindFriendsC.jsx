import React from 'react';
import {Avatar, Box, Button} from "@mui/material";
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setUsersActionCreator,
    unFollowActionCreator
} from "../../../redux/findFriendsReducer";
import axios from "axios";

import userPhoto from "../../../assets/img/149071.png"

import "./finfFriend.css"

class FindFriends extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                // console.log(response)
                this.props.dispatch(setUsersActionCreator(response.data.items));
            })
    }

    changeFollow = (userID) => {
        this.props.dispatch(unFollowActionCreator(userID));
    }

    changeUnFollow = (userID) => {
        this.props.dispatch(followActionCreator(userID));
    }

    changePage = (p) => {
        this.props.dispatch(setCurrentPageActionCreator(p))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                // console.log(response)
                this.props.dispatch(setUsersActionCreator(response.data.items));
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.state.totalCount / this.props.state.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return(<Box sx={{
                backgroundColor:"#7f7da8",

            }}>

                <div >
                    {pages.map(p => {
                        return <span
                            className={this.props.currentPage === p ? "active" : "page"}
                            // style={{cursor:"pointer"}}
                            onClick={() => {this.changePage(p)} } > {p} </span>
                    })}
                </div>



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

                </Box>
            </Box>
        );
    }

}


export default FindFriends;