import styles from './Header.module.css'
import SelectUser from "../SelectUser/SelectUser.jsx";
import Button from "../Button/Button.jsx";
import {useState} from "react";

const logos = ['../../public/Folder.ico', '../../public/data.png']
function Header(){

    const [logoIndex, setLogoIndex] = useState(0)

    const toggleLogo = () =>{
        setLogoIndex(state => Number(!state))
        // setLogoIndex((logoIndex) ? 0 : 1)
    }


    return(
        <>
            <div className={styles.logo}>
                Personal Journal
            </div>

            <img src={logos[logoIndex]} width='50px' alt="logo"/>

            <SelectUser/>
            <Button onClick={toggleLogo}>Сменить лого</Button>
        </>

    )
}
export default Header