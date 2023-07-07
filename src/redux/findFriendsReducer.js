const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENTPAGE = "SET_CURRENTPAGE";
const SET_ISLOADIND = "SET_ISLOADIND";

let init = {
    users:[],
    pageSize: 5,
    totalCount:200,//setTotalCount
    currentPage:1,
    isLoading: false
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
        return { ...state, currentPage: action.currentPage };
    } else if (action.type === SET_ISLOADIND) {
        return { ...state, isLoading: action.isLoading };
    } else {
        return state;
    }

}

export const followActionCreator = (userID) => ({type:FOLLOW, userID:userID})
export const unFollowActionCreator = (userID) => ({type:UNFOLLOW, userID:userID})
export const setUsersActionCreator = (users) => ({type:SET_USERS, users})
export const setCurrentPageActionCreator = (currentPage) => ({type:SET_CURRENTPAGE, currentPage})
export const setIsLoading = (isLoading) => ({type:SET_ISLOADIND, isLoading})


export default findFriendReducer;