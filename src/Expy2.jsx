import React from "react";
import styles from './Expy2.module.css';

export function Expy2 (props) {
    return <div>
        <h1 className = {styles.gru}>I am expy!!!!!!!!!!!!!!{props.myAt}</h1>
    </div>
}