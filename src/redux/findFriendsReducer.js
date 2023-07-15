const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_IS_LOADING = "SET_IS_LOADING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let init = {
    users:[],
    pageSize: 100,
    totalCount:1000,//setTotalCount
    currentPage:1,
    isLoading: false,
    followingInProgress: [],
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
    } else if (action.type === SET_CURRENT_PAGE) {
        return { ...state, currentPage: action.currentPage };
    } else if (action.type === SET_IS_LOADING) {
        return { ...state, isLoading: action.isLoading };
    }else if (action.type === TOGGLE_IS_FOLLOWING_PROGRESS) {
        // не работает mute
        // filter ?????????????????
        return {
            ...state,
            followingInProgress:
                action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
        };
    }  else {
        return state;
    }

}

export const followActionCreator = (userID) => ({type:FOLLOW, userID:userID})
export const unFollowActionCreator = (userID) => ({type:UNFOLLOW, userID:userID})
export const setUsersActionCreator = (users) => ({type:SET_USERS, users})
export const setCurrentPageActionCreator = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage})
export const setIsLoading = (isLoading) => ({type:SET_IS_LOADING, isLoading})
export const toggleInFollowingProgress = (isFetching,userId) => ({type:TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId  })

export default findFriendReducer;