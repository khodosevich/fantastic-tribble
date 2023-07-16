import React from 'react';
import Profile from "./Profile";
import {profileThunk, setUserProfile} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import withRouter from "./WithRouter";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let profileId = this.props.router.params['*'];

        if(!profileId){
            profileId = 29486;
        }

        this.props.profileThunk(profileId);
    }

    render(){
        return(
           <Profile {...this.props} profile={this.props.profile} />
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profileReducer.profilePage.profile
})



export default connect(mapStateToProps, {setUserProfile,profileThunk})(withRouter(ProfileContainer));