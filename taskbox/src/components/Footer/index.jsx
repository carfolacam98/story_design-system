import styles from './footer.module.scss'
import Logo from '../../assets/logo.svg'
import IconInstagram from '../../assets/instagram.svg'
import IconLinkedin from '../../assets/linkedin.svg'
import IconMail from '../../assets/mail.svg'

function Footer () {
  return <footer className={styles.footer}>
    <div className={`container ${styles.container}`}>
      <img src={Logo} alt="Logo" />
      <div className={styles.social}>
        <a href="#"><img src={IconInstagram} alt="Instagram" /></a>
        <a href="#"><img src={IconLinkedin} alt="Linkedin" /></a>
        <a href="#"><img src={IconMail} alt="Mail" /></a>
      </div>
    </div>
  </footer>
}

export default Footer
