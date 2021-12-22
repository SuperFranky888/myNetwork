import React from "react";
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";





const Dialogs = (props) => {

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>

                {props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)}

            </div>

            <div className={styles.dialogMessages}>

                {props.messages.map(el => <Message message={el.message} />)}

            </div>
        </div>
    )
}

export default Dialogs;