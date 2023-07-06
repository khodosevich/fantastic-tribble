import React from 'react';
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setUsersActionCreator,
    unFollowActionCreator
} from "../../../redux/findFriendsReducer";
import axios from "axios";

import UsersFunc from "./UsersFunc";


class FindFriends extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.pageSize}`)
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

    changePage = (p) => {
        console.log("change page" ,  this.props.dispatch)
        this.props.dispatch(setCurrentPageActionCreator(p))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.state.pageSize}`)
            .then(response => {
                this.props.dispatch(setUsersActionCreator(response.data.items));
            })
    }


    render() {
        return(
            <UsersFunc users={this.props.state.users}
                       currentPage={this.props.state.currentPage}
                       totalCount={this.props.state.totalCount}
                       pageSize={this.props.state.pageSize}
                       changeFollow={this.changeFollow}
                       changeUnFollow={this.changeUnFollow}
                       changePage={this.changePage}
            />
        );
    }
}


export default FindFriends;