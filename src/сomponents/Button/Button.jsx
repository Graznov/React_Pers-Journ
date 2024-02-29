import './Button.css'
import {memo, useState} from "react";

function Button({ children, onClick }) {

    return (
        <button className={'button accent'} onClick={onClick}>{children}</button>
    )
}

export default memo(Button)
