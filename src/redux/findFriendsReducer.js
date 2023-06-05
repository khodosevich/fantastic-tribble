
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let init = {
        users:[
            {
                "id": "1",
                "name": "Matvey",
                "status": "Chelsea is champion",
                "country": "Belarus, Plisa",
                "img": "https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854",
                "followed": true
            },
            {
                "id": "2",
                "name": "Stas",
                "status": "Chelsea is champion",
                "country": "Belarus, Minsk",
                "img": "https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854",
                "followed": false

            },
            {
                "id": "3",
                "name": "Ivan",
                "status": "Chelsea is champion",
                "country": "Belarus, Smolevichi",
                "img": "https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854",
                "followed": false
            },
            {
                "id": "4",
                "name": "Maksim",
                "status": "Chelsea is champion",
                "country": "Belarus, Borisov",
                "img": "https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854",
                "followed": true
            }
        ]

}

const findFriendReducer = (state = init, action) => {


    // if(action.type === FOLLOW){
    //
    //     console.log(state);
    //     let stateCopy = {...state,users: state.users.map( u => u.id === action.userID && u.followed == true  ) };
    //
    //     console.log(stateCopy);
    //     return stateCopy;
    //
    //
    // }else if(action.type === UNFOLLOW){
    //
    //     console.log("unfollow findFriendReducer");
    //
    //     let stateCopy = {...state,users: state.users.map( u => u.id === action.userID && u.followed == false  ) };
    //
    //     return stateCopy;
    //
    // }else if(action.type === SET_USERS){
    //
    //     return {...state, users: [...state.users, ...action.users ]};
    //
    // }else{
    //     return state;
    // }

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
        return { ...state, users: [...state.users, ...action.users] };
    } else {
        return state;
    }

}

export const followActionCreator = (userID) => ({type:FOLLOW, userID:userID})
export const unFollowActionCreator = (userID) => ({type:UNFOLLOW, userID:userID})
export const setUsersActionCreator = (users) => ({type:SET_USERS, users})

export default findFriendReducer;