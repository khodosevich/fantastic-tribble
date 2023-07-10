import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import withRouter from "./WithRouter";
import {getUserById} from "../../../api/methods";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let profileId = this.props.router.params['*'];

        if(!profileId){
            profileId = 29486;
        }

        getUserById(profileId)
            .then(response => {
                this.props.dispatch(setUserProfile(response));
        })
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



export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));