import styles from './Logo.module.css'

function Logo ({ image }) {
    console.log('Logo')
    return <img className={styles.logoIMG} src={image} alt="logo"/>
}

export default Logo