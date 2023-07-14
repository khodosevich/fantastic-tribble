import React from 'react';
import {
    followActionCreator,
    setCurrentPageActionCreator, setIsLoading,
    setUsersActionCreator, toggleInFollowingProgress,
    unFollowActionCreator
} from "../../../redux/findFriendsReducer";

import UsersFunc from "./UsersFunc";
import Preloader from "../../common/preloader/Preloader";
import {getUsers} from "../../../api/methods";

class FindFriends extends React.Component {
    componentDidMount() {
        this.props.dispatch(setIsLoading(true))

        getUsers(this.props.state.currentPage, this.props.state.pageSize ).then(r => {
            this.props.dispatch(setIsLoading(false))
            this.props.dispatch(setUsersActionCreator(r.items));
        } )
    }

    changeFollow = (userID) => {
        this.props.dispatch(followActionCreator(userID));
    }

     changeUnFollow = (userID) => {
         this.props.dispatch(unFollowActionCreator(userID));
    }

    changePage = (p) => {
        this.props.dispatch(setCurrentPageActionCreator(p))
        this.props.dispatch(setIsLoading(true))

        getUsers(p,this.props.state.pageSize)
            .then(response => {
                this.props.dispatch(setIsLoading(false))
                this.props.dispatch(setUsersActionCreator(response.items));
            })
    }

    toggleFollowingInProgress = (isFetching,userId) => {
        this.props.dispatch(toggleInFollowingProgress(isFetching,userId));
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
                             followingInProgress={this.props.state.followingInProgress}
                             toggleFollowingInProgress={this.toggleFollowingInProgress}
                />
            }
        </>
        );
    }
}


export default FindFriends;