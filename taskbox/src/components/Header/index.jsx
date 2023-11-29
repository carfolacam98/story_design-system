import styles from './header.module.scss'
import Logo from '../../assets/logo.svg'

function Header () {
  return <header className={styles.header}>
    <img src={Logo} alt="Logo" />
  </header>
}

export default Header
