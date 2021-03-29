import{ ReactSVG } from 'react-svg';
import styles from './MenuSidebar.module.scss';

const MenuSidebar = ({menuOpen, setMenuState})  => {
  return <div className="d-lg-none">
    <div className={`mobile-menu ${menuOpen ? 'menu-open' : ''}`}>
      <div className="text-right">
        <a onClick={() => setMenuState(false)} className={styles.closeButton}><ReactSVG src="/icons/close-icon.svg" /></a>
      </div>
      <div className="nav-item">
        <a href="#home">Home</a>
      </div>
      <div className="nav-item">
        <a href="#feautres">Features</a>
      </div>
      <div className="nav-item">
        <a href="#faq">FAQ</a>
      </div>
      <div className="nav-item">
        <a href="#success">Success</a>
      </div>
      <div className={styles.mobileDashboard}>
        <a href="https://ls-notify.metalabs.gg/dashboard">Dashboard</a>
      </div>
    </div>
    { menuOpen && <div className={styles.mobileOverlay} onClick={() => setMenuState(false)} /> }
  </div>
}

export default MenuSidebar;
