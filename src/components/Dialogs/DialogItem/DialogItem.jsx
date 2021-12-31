import React from "react";
import { NavLink } from "react-router-dom";
import styles from './../Dialogs.module.css';

let setActivity = ({ isActive }) =>(isActive ? `${styles.active}` : "");

const DialogItem = (props) => {
    return (
        <div className={styles.dialog} >
            <div className={styles.dialogAvatar}><img src={props.imgLink} alt="" /></div>
            <NavLink to={`/dialogs/${props.id}`} className={props.className}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;