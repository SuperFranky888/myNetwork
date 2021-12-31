import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import { Experimental } from './Experimental';
import { Expy2 } from './Expy2';
import NewComponent from './components/Friends/Friends';
import Friends from './components/Friends/Friends';

// let dialogs = [
//   { id: 1, name: 'Dimych' },
//   { id: 2, name: 'Ira' },
//   { id: 3, name: 'Masha' },
//   { id: 4, name: 'Anna' },
//   { id: 5, name: 'Angel' },
//   { id: 6, name: 'Vika' }
// ];

// let messages = [
//   { id: 1, message: 'Hello!!' },
//   { id: 2, message: 'Yohohoh man!' },
//   { id: 3, message: 'Kiss me' },
//   { id: 4, message: 'Come to me' },
//   { id: 5, message: 'How are you my dear?' },
//   { id: 6, message: 'Wohhhhh!' }
// ];


const App = (props) => {
  console.log(props.appState.sidebar.friends);
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state = {props.appState.sidebar}/>

        <div className="app-wrapper-content">

          <Routes>
            <Route path="/profile" element={<Profile state = {props.appState.profilePage}/>} />
            <Route path="/dialogs/*" element={<Dialogs state={props.appState.dialogsPage} />} />
            <Route path="/news" element={<News my='aga!! NEWS!!!!!' />} />
            <Route path="/music" element={<Music my='Play your favourite music!!!' />} />
            <Route path="/settings" element={<Settings my='Settings!!! ' />} />
            <Route path='/experimental' element={<Experimental exp='HAHAHAHAHAHAEXPERIMENTAL!!!' />} />
            <Route path='/expy2' element={<Expy2 myAt='Myaexp2222222' />} />
            {props.appState.sidebar.friends.map(friend => <Route path={`/friends/${friend.id}`} element={<Friends name={friend.name} imgLink = {friend.imgLink} />} /> )}
          </Routes>
        </div>

      </div>;

    </BrowserRouter>
  )
}

export default App;