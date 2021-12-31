import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import DialogItem from '../Dialogs/DialogItem/DialogItem';
import s from './Navbar.module.css';

console.log(s);



let setActivity = ({ isActive }) => (isActive ? `${s.active}` : "");

const Navbar = (props) => {
    console.log(props.state.friends);

    return <nav className={s.nav}>
        <div className={s.item}>
            {/* <a href='/profile'>Profile</a> */}
            <NavLink to='/profile' className={setActivity}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to='/dialogs' className={setActivity}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' className={setActivity}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='music' className={setActivity}>Music</NavLink>

        </div>
        <div className={s.item}>
            <NavLink to='/settings' className={setActivity}>Settings</NavLink>
            <NavLink to='/experimental' className={setActivity}>Experimental</NavLink>
            <NavLink to='/expy2' className={setActivity}> Expy2</NavLink>
        </div>

        <div className={s.item}>
            Friends
            <div className={s.friendsList}>
                {props.state.friends.map(friend => <div className={s.friendsItem}>
                    <div className={s.friendsImg}><img src={friend.imgLink} alt="" /></div>
                    <NavLink to={`/friends/${friend.id}`}>{friend.name}</NavLink>
                </div>)}
            </div>
        </div>
    </nav>
}

export default Navbar;