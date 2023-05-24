import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

import posts from './jsonFiles/posts.json'
import dialogs from './jsonFiles/dialogs.json'
import messages from './jsonFiles/messages.json'

import state from './redux/state'
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
         <App state={state}/>
      </BrowserRouter>

  </React.StrictMode>
);

