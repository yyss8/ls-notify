import { Nav, Container } from 'react-bootstrap';
import HeaderStyles from './Header.module.scss';

const Header = () => {
  return <header id="home" className={HeaderStyles.header}>
    <Nav>
      <Container fluid="lg" className="d-flex justify-content-between align-items-end">
        <a href="#home" className={`navbar-brand d-flex align-items-end ${HeaderStyles.siteLogo}`}>
          <img src="images/site-logo.png" alt="LS Notify Site LOGO" />
          <h1>NOTIFY</h1>
        </a>
        <div className={`d-flex justify-content-between ${HeaderStyles.navItems}`}>
          <Nav.Item>
            <a href="#home">Home</a>
          </Nav.Item>
          <Nav.Item>
            <a href="#feautres">Features</a>
          </Nav.Item>
          <Nav.Item>
            <a href="#faq">FAQ</a>
          </Nav.Item>
          <Nav.Item>
            <a href="#success">Success</a>
          </Nav.Item>
        </div>
        <a href="https://ls-notify.metalabs.gg/dashboard" className={HeaderStyles.dashboardButton}>Dashboard</a>
      </Container>
    </Nav>
  </header>
}

export default Header;
