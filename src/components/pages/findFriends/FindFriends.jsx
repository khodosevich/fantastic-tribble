import React from 'react';
import {
    followActionCreator,
    setCurrentPageActionCreator, setIsLoading,
    setUsersActionCreator,
    unFollowActionCreator
} from "../../../redux/findFriendsReducer";
import axios from "axios";

import UsersFunc from "./UsersFunc";
import Preloader from "../../common/preloader/Preloader";

class FindFriends extends React.Component {
    componentDidMount() {

        this.props.dispatch(setIsLoading(true))

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.pageSize}`)
            .then(response => {
                this.props.dispatch(setIsLoading(false))
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
        this.props.dispatch(setIsLoading(true))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.state.pageSize}`)
            .then(response => {
                this.props.dispatch(setIsLoading(false))
                this.props.dispatch(setUsersActionCreator(response.data.items));
            })
    }

    render() {
        return(<>
            {this.props.state.isLoading
                ? <Preloader/>
                : <UsersFunc users={this.props.state.users}
                             currentPage={this.props.state.currentPage}
                             totalCount={this.props.state.totalCount}
                             pageSize={this.props.state.pageSize}
                             changeFollow={this.changeFollow}
                             changeUnFollow={this.changeUnFollow}
                             changePage={this.changePage}
                             isLoading={this.props.state.isLoading}
                />
            }

        </>


        );
    }
}


export default FindFriends;