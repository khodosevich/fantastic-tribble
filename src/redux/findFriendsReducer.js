const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let init = {
        users:[]
}

const findFriendReducer = (state = init, action) => {

    if (action.type === FOLLOW) {
        return {
            ...state,
            users: state.users.map((u) =>
                u.id === action.userID ? { ...u, followed: true } : u
            ),
        };
    } else if (action.type === UNFOLLOW) {
        return {
            ...state,
            users: state.users.map((u) =>
                u.id === action.userID ? { ...u, followed: false } : u
            ),
        };
    } else if (action.type === SET_USERS) {
        return { ...state, users: action.users };
    } else {
        return state;
    }

}

export const followActionCreator = (userID) => ({type:FOLLOW, userID:userID})
export const unFollowActionCreator = (userID) => ({type:UNFOLLOW, userID:userID})
export const setUsersActionCreator = (users) => ({type:SET_USERS, users})

export default findFriendReducer;