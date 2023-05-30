import React from 'react';
import store from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import App from "./app";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById('root'));


export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={store.addPost.bind(store)} updateNewPost={store.updateNewPostText.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);