import styles from './Header.module.css'
import SelectUser from "../SelectUser/SelectUser.jsx";

const logos = ['../../public/Folder.ico', '../../public/data.png']
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