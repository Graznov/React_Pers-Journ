import styles from './JournalForm.module.css'
import Button from "../Button/Button.jsx";
import {useEffect, useReducer,} from "react";
import cn from 'classnames'
import {formReduser, INITIAL_STATE} from "./JournalForm.state.js";


function JournalForm({ onSubmit }){ // через onSubmit отправляются данные в App

    const [ formState, dispatchForm ] = useReducer( formReduser, INITIAL_STATE)
    const { isValid, isFormReadyToSubmit, values } = formState

    useEffect(() => {
        let timerId
        if(!isValid.date || !isValid.title || !isValid.date){

            timerId = setTimeout(() => {
                console.log('Очистка состояния')
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
        }
    },[isFormReadyToSubmit])


    const addJournalItem = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formProps = Object.fromEntries(formData)
        dispatchForm({ type : 'SUBMIT', payload : formProps })

        // onSubmit(formProps)

    }

    return(
            <form className={styles['journal-form']} onSubmit={addJournalItem}>
                <div>
                    <input type="text" name='title' className={cn(styles['input-title'], {
                        [styles['invalid']] : !isValid.title
                    })}/>
                </div>

                <div className={styles['form-row']}>
                    <label htmlFor="date" className={styles['form-lablel']}>
                        <img src='../Public/data.png' alt='calendar'/>
                        <span>Дата</span>
                    </label>
                    <input type="date" id='date' name='date' className={cn(styles['input'], {
                        [styles['invalid']] : !isValid.date
                    })}/>
                </div>

                <div className={styles['form-row']}>
                    <label htmlFor="tag" className={styles['form-lablel']}>
                        <img src='../Public/Folder.ico' alt='Folder'/>
                        <span>Метки</span>
                    </label>
                    <input type="text" id='tag' name='tag' className={styles['input']}/>
                </div>
                <textarea name='post' id='' cols='30' rows='5' className={cn(styles['input'], {
                    [styles['invalid']] : !isValid.post
                })}></textarea>
                <Button text='Сохранить'/>
            </form>

    )
}
export default JournalForm