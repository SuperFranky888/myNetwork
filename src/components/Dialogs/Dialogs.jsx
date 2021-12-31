import React from "react";
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Route, Routes } from "react-router-dom";



let setActivity = ({ isActive }) =>(isActive ? `${styles.active}` : "");

const Dialogs = (props) => {
    console.log(props.state);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
       

                {props.state.dialogs.map(dialog => <DialogItem imgLink = {dialog.imgLink} name={dialog.name} id={dialog.id} className={setActivity} />)} 
               

            </div>

            <div className={styles.dialogMessages}>
            <Routes>
                {/* <Route path={dialog.id} element={<DialogItem imgLink = {dialog.imgLink} name={dialog.name} id={dialog.id} className={setActivity} />} /> */}
 {props.state.dialogs.map(dialog => <Route path={`/${dialog.id}`} element={<DialogItem imgLink = {dialog.imgLink} name={dialog.name} id={dialog.id} className={setActivity} />} />)}

            </Routes>

                {props.state.messages.map(el => <Message message={el.message} />)}

            </div>
        </div>
    )
}

export default Dialogs;

// {props.state.dialogs.map(dialog => <DialogItem imgLink = {dialog.imgLink} name={dialog.name} id={dialog.id} className={setActivity} />)}