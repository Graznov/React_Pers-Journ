import styles from './Header.module.css'
import SelectUser from "../SelectUser/SelectUser.jsx";

function Header({changedUser}){

    const changeUser = (e) => {
        changedUser(e.target.value)
        console.log(e.target.value)
    }

    return(
        <>
            <div className={styles.logo}>
                Personal Journal
            </div>

            <SelectUser changedUser={changedUser}/>
        </>

    )
}
export default Header