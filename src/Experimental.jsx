import React from "react";
import s from "./Experimental.module.css"

export function Experimental(props) {
    return (
        <h1 className={s.exp} >I am here to remember all{props.exp}!!!</h1>
    )
}