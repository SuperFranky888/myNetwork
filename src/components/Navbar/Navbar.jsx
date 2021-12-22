import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
console.log(s);

let setActivity = ({ isActive }) =>(isActive ? `${s.active}` : "");

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            {/* <a href='/profile'>Profile</a> */}
            <NavLink to='/profile'  className={setActivity}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to='/dialogs'className={setActivity}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' className={setActivity}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='music' className={setActivity}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings' className={setActivity}>Settings</NavLink>
            <NavLink to ='/experimental'>Experimental</NavLink>
            <NavLink to = '/expy2'> Expy2</NavLink>
        </div>
    </nav>
}

export default Navbar;