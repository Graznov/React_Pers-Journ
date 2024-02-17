import styles from './JournalForm.module.css'
import Button from "../Button/Button.jsx";
import {useEffect, useReducer, useRef,} from "react";
import cn from 'classnames'
import {formReduser, INITIAL_STATE} from "./JournalForm.state.js";


function JournalForm({ onSubmit }){ // через onSubmit отправляются данные в App

    const [ formState, dispatchForm ] = useReducer( formReduser, INITIAL_STATE)
    const { isValid, isFormReadyToSubmit, values } = formState
    const titleRef = useRef()
    const dateRef = useRef()
    const postRef = useRef()


    const focusError = (isValid) => {
        switch (true){
            case !isValid.title :
                titleRef.current.focus();
                break
            case !isValid.date :
                dateRef.current.focus();
                break
            case !isValid.post :
                postRef.current.focus();
                break
        }
    }

    useEffect(() => {
        let timerId
        if(!isValid.date || !isValid.title || !isValid.post){
            focusError(isValid)
            timerId = setTimeout(() => {
                dispatchForm({ type : 'RESET_VALIDITY'})
            }, 1300)
        }

        return () => {
            clearTimeout(timerId)
        }

    },[isValid])

    useEffect(() => {
        if(isFormReadyToSubmit) {
            onSubmit(values)
            dispatchForm({type: 'CLEAR'} )
        }
    },[isFormReadyToSubmit, values, onSubmit])

    const onChange =(e)=> {
        dispatchForm({  type : 'SET_VALUE', payload : {[e.target.name] : e.target.value}})
    }

    const addJournalItem = (e) => {
        e.preventDefault()
        dispatchForm({ type : 'SUBMIT' })

        // onSubmit(formProps)

    }

    return(
            <form className={styles['journal-form']} onSubmit={addJournalItem}>
                <div>
                    <input type="text" ref={titleRef} onChange={onChange} value={values.title} name='title' className={cn(styles['input-title'], {
                        [styles['invalid']] : !isValid.title
                    })}/>
                </div>

                <div className={styles['form-row']}>
                    <label htmlFor="date" className={styles['form-lablel']}>
                        <img src='../Public/data.png' alt='calendar'/>
                        <span>Дата</span>
                    </label>
                    <input type="date" ref={dateRef} id='date' onChange={onChange} value={values.date} name='date' className={cn(styles['input'], {
                        [styles['invalid']] : !isValid.date
                    })}/>
                </div>

                <div className={styles['form-row']}>
                    <label htmlFor="tag" className={styles['form-lablel']}>
                        <img src='../Public/Folder.ico' alt='Folder'/>
                        <span>Метки</span>
                    </label>
                    <input type="text" id='tag' onChange={onChange} value={values.tag} name='tag' className={styles['input']}/>
                </div>
                <textarea ref={postRef} name='post' id='' onChange={onChange} cols='30' rows='5' value={values.post} className={cn(styles['input'], {
                    [styles['invalid']] : !isValid.post
                })}></textarea>
                <Button text='Сохранить'/>
            </form>

    )
}
export default JournalForm