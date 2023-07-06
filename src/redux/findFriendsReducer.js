const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENTPAGE = "SET_CURRENTPAGE";


let init = {
    users:[],
    pageSize: 5,
    totalCount:200,//setTotalCount
    currentPage:1
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
    } else if (action.type === SET_CURRENTPAGE) {
       console.log("SET_CURRENTPAGE")
        return { ...state, currentPage: action.currentPage };
    } else {
        return state;
    }

}

export const followActionCreator = (userID) => ({type:FOLLOW, userID:userID})
export const unFollowActionCreator = (userID) => ({type:UNFOLLOW, userID:userID})
export const setUsersActionCreator = (users) => ({type:SET_USERS, users})
export const setCurrentPageActionCreator = (currentPage) => ({type:SET_CURRENTPAGE, currentPage})

export default findFriendReducer;