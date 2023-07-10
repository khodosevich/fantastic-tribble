import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {authMe, getUserById} from "../../api/methods";

class HeaderContainer extends React.Component{

     async componentDidMount() {
        try {
            const response = await authMe().then(r => r);

            const { id, login, email } = response.data;

            if (response.resultCode === 0) {
                const profileResponse = await getUserById(id);
                console.log("pr: " , profileResponse)
                this.props.setAuthUserData(id, email, login, profileResponse);
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