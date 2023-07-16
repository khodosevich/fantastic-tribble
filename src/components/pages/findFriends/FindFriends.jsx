import React from 'react';
import {
    changePageThunk, followThunk, getUsersThunkCreator, unfollowThunk
} from "../../../redux/findFriendsReducer";

import UsersFunc from "./UsersFunc";
import Preloader from "../../common/preloader/Preloader";
import {connect} from "react-redux";

class FindFriends extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.state.currentPage, this.props.state.pageSize);
    }

    changePage = (p) => {
        this.props.changePageThunk(p, this.props.state.pageSize);
    }

    render() {
        return(<>
            {this.props.state.isLoading
                ? <Preloader/>
                : <UsersFunc users={this.props.state.users}
                             currentPage={this.props.state.currentPage}
                             totalCount={this.props.state.totalCount}
                             pageSize={this.props.state.pageSize}
                             changePage={this.changePage}
                             followingInProgress={this.props.state.followingInProgress}
                             unfollowThunk={this.props.unfollowThunk}
                             followThunk={this.props.followThunk}
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
    {
                      getUsersThunkCreator,
                      changePageThunk,
                      unfollowThunk,
                      followThunk
    }) (FindFriends);