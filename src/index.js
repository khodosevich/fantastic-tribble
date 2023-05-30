import React from 'react';
import state, {addPost, subscribe, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import App from "./app";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById('root'));


export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updateNewPost={updateNewPostText} />
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);