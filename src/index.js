import React from 'react';
import store from "./redux/reduxStore";
import {BrowserRouter} from "react-router-dom";
import App from "./app";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App state={state} dispatch={store.dispatch.bind(store)}  />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});