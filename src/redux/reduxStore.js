import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";

import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import findFriendReducer from "./findFriendsReducer";
import authReducer from "./authReducer";

import thunk from "redux-thunk"

let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    findFriendReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;