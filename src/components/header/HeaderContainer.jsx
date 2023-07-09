import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {setUserProfile} from "../../redux/profileReducer";

class HeaderContainer extends React.Component{

    async componentDidMount() {
        try {
            const response = await axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
                withCredentials: true
            });

            const { id, login, email } = response.data.data;
            if (response.data.resultCode === 0) {
                const profileResponse = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`);
                this.props.setAuthUserData(id, email, login, profileResponse.data);
            }
        } catch (error) {
            console.error(error);
        }
    }


    render() {
        return (
            <Header {...this.props} />
        );
    }

};

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userInfo: state.auth.userInfo
})

export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer);