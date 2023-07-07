import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../../redux/profileReducer";
import {connect} from "react-redux";

class ProfileContainer extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/10`)
                .then(response => {
                    this.props.dispatch(setUserProfile(response.data));
                    console.log(this.props.state.profile)
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


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);