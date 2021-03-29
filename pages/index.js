import { Component, Fragment } from 'react';
import { Waypoint } from 'react-waypoint';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Header from '../src/components/Header/Header';
import SectionMain from '../src/components/section-main/SectionMain';
import WhatWeProvide from '../src/components/WhatWeProvide/WhatWeProvide';
import FaqSection from '../src/components/Faq/Faq';
import SuccessSection from '../src/components/OurSuccess/OurSuccess';
import MenuSidebar from '../src/components/MenuSidebar/MenuSidebar';
import Footer from '../src/components/Footer/Footer';

export default class extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
      isLoading: true,
      sectionShowed: {},
    };

    this.onElementEntered = this.onElementEntered.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      document.querySelector('body').classList.remove('loading');
      this.setState({isLoading: false}, () => {
        document.querySelectorAll('.nav-item a').forEach(selector => {
          selector.addEventListener('click', this.scrollElement)
        });
    
        window.addEventListener('scroll', this.applyHeaderStyling);
      });
    }, 800);
  }

  componentWillUnmount() {
    document.querySelectorAll('.nav-item a').forEach(selector => {
      selector.removeEventListener('click', this.scrollElement);
    });

    window.removeEventListener('scroll', this.applyHeaderStyling);
  }

  scrollElement(e) {
    console.log(e);
    e.preventDefault();
    document.querySelector(`#${e.target.getAttribute('href').replace('#', '')}`).scrollIntoView({
      behavior: 'smooth',
    });
  }

  applyHeaderStyling() {
    if (window.scrollY > 0) {
      document.querySelector('#header').classList.add(styles.headerSticky);
    } else {
      document.querySelector('#header').classList.remove(styles.headerSticky);
    }
  }

  setMenuState(state) {
    this.setState({menuOpen: state});
  }

  onElementEntered(areaIndex) {
    return () => {
      if (Boolean(this.state.sectionShowed[areaIndex])) {
        return;
      }

      const sectionShowed = {
        ...this.state.sectionShowed,
        [areaIndex]: true,
      };

      this.setState({sectionShowed});
    } 
  }

  render() {
    const { sectionShowed } = this.state;

    return (
      <div>
        <Head>
          <title>LS Notify</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="/globals.css" />
        </Head>
        <div className={`preloading ${this.state.isLoading ? '' : 'loaded'}`}>
          <div className="d-flex justify-content-center align-items-center">
            <div>
              <div className="d-flex align-items-end">
                <img src="/images/site-logo.png" />
                <span>NOTIFY</span>
              </div>
              <div className="loading-progress">
                <span className="progress"></span>
              </div>
            </div>
          </div>
        </div>
        {!this.state.isLoading && <Fragment>
          <MenuSidebar menuOpen={this.state.menuOpen} setMenuState={this.setMenuState.bind(this)} />
          <div id="home" className={styles.background} style={{zIndex: 10, position: 'relative'}}>
            <Header setMenuState={this.setMenuState.bind(this)} />
            <Waypoint onEnter={this.onElementEntered(0)}>
              <div className={`${styles.hiddenArea} ${Boolean(sectionShowed[0]) ? styles.displayed : ''}`}>
                <SectionMain />
              </div>
            </Waypoint>
          </div>
          <Waypoint topOffset={5} onEnter={this.onElementEntered(1)}>
            <div className={`${styles.hiddenArea} ${Boolean(sectionShowed[1]) ? styles.displayed : ''}`}>
              <WhatWeProvide />
            </div>
          </Waypoint>
          
          <Waypoint topOffset={20} onEnter={this.onElementEntered(2)}>
            <div className={`${styles.hiddenArea} ${Boolean(sectionShowed[2]) ? styles.displayed : ''}`}>
              <FaqSection />
            </div>
          </Waypoint>
          
          <Waypoint topOffset={5} onEnter={this.onElementEntered(3)}>
            <div className={`${styles.hiddenArea} ${Boolean(sectionShowed[3]) ? styles.displayed : ''}`}>
              <SuccessSection />
            </div>
          </Waypoint>
          <Footer />
        </Fragment>}
      </div>
    )
  }
}