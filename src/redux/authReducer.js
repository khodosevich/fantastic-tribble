import {authMe, getUserById} from "../api/methods";

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

export const getAuthUserData =  () => async (dispatch)  => {
    try {
        const response = await authMe().then(r => r);

        const { id, login, email } = response.data;

        if (response.resultCode === 0) {
            const profileResponse = await getUserById(id);
            dispatch(setAuthUserData(id, email, login, profileResponse));
        }
    }catch (error) {
        console.log(error)
    }
}



export default authReducer;