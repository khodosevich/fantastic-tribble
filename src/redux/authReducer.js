import userInfo from "../components/pages/profile/user/UserInfo";

const SET_USER_DATA = "SET_USER_DATA";

let init = {
    userId: null,
    email:null,
    login:null,
    isLoading: false,
    isAuth: false,
    userInfo: null
}

const authReducer = (state = init, action) => {

    if (action.type === SET_USER_DATA) {
        return {
           ...state,
           ...action.data,
           isAuth: true,
            userInfo: action.currentUser
        };
    } else {
        return state;
    }

}

export const setAuthUserData = (userId,email,login, currentUser) => ({type:SET_USER_DATA, data: {userId,email,login} , currentUser})
// export const setIsLoading = (isLoading) => ({type:SET_ISLOADIND, isLoading})


export default authReducer;