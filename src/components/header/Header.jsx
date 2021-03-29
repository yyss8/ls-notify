import{ ReactSVG } from 'react-svg';
import HeaderStyles from './Header.module.scss';

const Header = ({setMenuState}) => {

  return <header id="header" className={HeaderStyles.header}>
    <nav className="nav">
      <div className="container-lg d-flex justify-content-between align-items-center align-items-xl-end">
        <a href="#home" className={`navbar-brand d-flex align-items-end ${HeaderStyles.siteLogo} mr-lg-5`}>
          <img src="images/site-logo.png" alt="LS Notify Site LOGO" />
          <h1>NOTIFY</h1>
        </a>
        <div className={`${HeaderStyles.headerRight} d-none d-xl-flex justify-content-between`}>
          <div className={`d-xl-flex justify-content-between align-items-end ${HeaderStyles.navItems}`}>
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
          </div>
          <a href="https://ls-notify.metalabs.gg/dashboard" className={HeaderStyles.dashboardButton}>Dashboard</a>
        </div>
        <a className={`d-xl-none ${HeaderStyles.menuTrigger}`} onClick={() => setMenuState(true)}><ReactSVG src="/icons/menu-icon.svg" /></a>
      </div>
    </nav>
  </header>
}

export default Header;
