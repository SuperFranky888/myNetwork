import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {state} from "./Redux/state";






ReactDOM.render(<App appState = {state} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA





// messages={state.messages} dialogs={state.dialogs} posts={state.posts}


serviceWorker.unregister();
