import styles from './Header.module.css'
import SelectUser from "../SelectUser/SelectUser.jsx";

function Header(){



    return(
        <>
            <div className={styles.logo}>
                Personal Journal
            </div>

            <SelectUser/>
        </>

    )
}
export default Header