import './Button.css'
import { useState} from "react";

function Button() {

    const [text, setText] =  useState('Сохранить')
    const clicked = () => {
        setText((text==='Сохранить') ? 'Закрыть' : 'Сохранить')
        console.log(text)
    }

    return (
        <button onClick={clicked} className={'button accent'}>{text}</button>
    )
}

export default Button
