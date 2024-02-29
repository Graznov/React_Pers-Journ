import styles from './Logo.module.css'
import { memo } from "react";

function Logo ({ image }) {
    return <img className={styles.logoIMG} src={image} alt="logo"/>
}

export default memo(Logo)