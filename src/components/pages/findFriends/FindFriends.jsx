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
import {connect} from "react-redux";

class FindFriends extends React.Component {
    componentDidMount() {
        this.props.setIsLoading(true)

        getUsers(this.props.state.currentPage, this.props.state.pageSize ).then(r => {
            this.props.setIsLoading(false)
            this.props.setUsersActionCreator(r.items);
        } )
    }

    changeFollow = (userID) => {
        this.props.followActionCreator(userID);
    }

     changeUnFollow = (userID) => {
         this.props.unFollowActionCreator(userID);
    }

    changePage = (p) => {
        this.props.setCurrentPageActionCreator(p)
        this.props.setIsLoading(true)

        getUsers(p,this.props.state.pageSize)
            .then(response => {
                this.props.setIsLoading(false)
                this.props.setUsersActionCreator(response.items);
            })
    }

    toggleFollowingInProgress = (isFetching,userId) => {
        this.props.toggleInFollowingProgress(isFetching,userId);
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


let mapStateToProps = (state) => ({
    users: state.users,
    currentPage: state.currentPage,
    totalCount:state.totalCount,
    pageSize: state.pageSize,
    isLoading: state.isLoading,
    followingInProgress: state.followingInProgress
})


export default connect(mapStateToProps,
    {setIsLoading,
                      setUsersActionCreator,
                      followActionCreator,
                      toggleInFollowingProgress,
                      unFollowActionCreator,
                      setCurrentPageActionCreator
    }) (FindFriends);