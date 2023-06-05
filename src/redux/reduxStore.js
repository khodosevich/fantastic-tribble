import {combineReducers, legacy_createStore as createStore} from "redux";


import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import findFriendReducer from "./findFriendsReducer";

let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    findFriendReducer

});

let store = createStore(reducers);


export default store;