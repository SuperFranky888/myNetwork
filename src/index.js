import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let dialogs = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Ira' },
    { id: 3, name: 'Masha' },
    { id: 4, name: 'Anna' },
    { id: 5, name: 'Angel' },
    { id: 6, name: 'Vika' }
];

let messages = [
    { id: 1, message: 'Hello!!' },
    { id: 2, message: 'Yohohoh man!' },
    { id: 3, message: 'Kiss me' },
    { id: 4, message: 'Come to me' },
    { id: 5, message: 'How are you my dear?' },
    { id: 6, message: 'Wohhhhh!' }
];

let posts = [
    { id: 1, message: 'Hello!!', likesCount: 11 },
    { id: 2, message: 'Yohohoh man!', likesCount: 12 },
    { id: 3, message: 'Kiss me', likesCount: 15 },
    { id: 4, message: 'Come to me', likesCount: 3 },
    { id: 5, message: 'How are you my dear?', likesCount: 4 },
    { id: 6, message: 'Wohhhhh!', likesCount: 3 }
]



ReactDOM.render(<App
    messages={messages}
    dialogs={dialogs}
    posts={posts} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA








serviceWorker.unregister();
