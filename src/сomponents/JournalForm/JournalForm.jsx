import styles from './JournalForm.module.css'
import Button from "../Button/Button.jsx";
import {useContext, useEffect, useReducer, useRef,} from "react";
import cn from 'classnames'
import {formReduser, INITIAL_STATE} from "./JournalForm.state.js";
import Input from "../Input/Input.jsx";
import {UserContext} from "../../context/user.context.jsx";


function JournalForm({ onSubmit, data, onDelete }){ // через onSubmit отправляются данные в App

    const [ formState, dispatchForm ] = useReducer( formReduser, INITIAL_STATE)
    const { isValid, isFormReadyToSubmit, values } = formState
    const titleRef = useRef()
    const dateRef = useRef()
    const postRef = useRef()

    const { userId } = useContext(UserContext)


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

    useEffect(()=>{
        if(!data){
            dispatchForm({type: 'CLEAR'} )
            dispatchForm({  type : 'SET_VALUE', payload : { userId }})
        }
        dispatchForm({ type: "SET_VALUE", payload: { ...data }})
    },[data])

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
            dispatchForm({  type : 'SET_VALUE', payload : { userId }})
        }
    },[isFormReadyToSubmit, values, onSubmit, userId])

    useEffect(() => {
        dispatchForm({  type : 'SET_VALUE', payload : { userId }})
    }, [userId]);

    const onChange =(e)=> {
        dispatchForm({  type : 'SET_VALUE', payload : {[e.target.name] : e.target.value}})
    }

    const addJournalItem = (e) => {
        e.preventDefault()
        dispatchForm({ type : 'SUBMIT' })
    }

    const deleteJournalItem = () => {
        onDelete(data.id)
        dispatchForm({type: 'CLEAR'} )
        dispatchForm({  type : 'SET_VALUE', payload : { userId }})
    }

    return(
                    <form className={styles['journal-form']} onSubmit={addJournalItem}>
                        <div className={styles['form-row']}>
                            <Input appearence="title" type="text" ref={titleRef} isValid={isValid.title} onChange={onChange} value={values.title} name='title' appearence='title'/>
                            {data?.id && <button className={styles['delete']} type="button" onClick={deleteJournalItem}>
                                <img src="../../../public/delete.png" width='30px' alt="del"/>
                            </button>}
                        </div>

                        <div className={styles['form-row']}>
                            <label htmlFor="date" className={styles['form-lablel']}>
                                <img src='../Public/data.png' alt='calendar'/>
                                <span>Дата</span>
                            </label>
                            <Input type="date" ref={dateRef} isValid={isValid.date} id='date' onChange={onChange} value={values.date ? new Date(values.date).toISOString().slice(0,10) : ''} name='date' />
                        </div>

                        <div className={styles['form-row']}>
                            <label htmlFor="tag" className={styles['form-lablel']}>
                                <img src='../Public/Folder.ico' alt='Folder'/>
                                <span>Метки</span>
                            </label>
                            <Input type="text" id='tag' onChange={onChange} value={values.tag} name='tag'/>
                        </div>
                        <textarea ref={postRef} name='post' id='' onChange={onChange} cols='30' rows='5' value={values.post} className={cn(styles['input'], {
                            [styles['invalid']] : !isValid.post
                        })}></textarea>
                        <Button>Сохранить</Button>
                    </form>



    )
}
export default JournalForm