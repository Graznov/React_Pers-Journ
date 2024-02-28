import './Button.css'
import {memo, useState} from "react";

function Button({ children, onClick }) {

    console.log('Button')

    return (
        <button className={'button accent'} onClick={onClick}>{children}</button>
    )
}

export default memo(Button)
