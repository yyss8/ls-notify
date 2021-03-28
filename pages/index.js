import React from 'react';;
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Header from '../src/components/Header/Header';
import SectionMain from '../src/components/section-main/SectionMain';
import WhatWeProvide from '../src/components/WhatWeProvide/WhatWeProvide';
import FaqSection from '../src/components/Faq/Faq';
import SuccessSection from '../src/components/OurSuccess/OurSuccess';

export default class extends React.Component {

  componentDidMount() {
    document.querySelectorAll('.nav-item a').forEach(selector => {
      selector.addEventListener('click', this.scrollElement)
    });
  }

  componentWillUnmount() {
    document.querySelectorAll('.nav-item a').forEach(selector => {
      selector.removeEventListener('click', this.scrollElement);
    });
  }

  scrollElement(e) {
    e.preventDefault();
    document.querySelector(`#${e.target.getAttribute('href').replace('#', '')}`).scrollIntoView({
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <div >
        <Head>
          <title>LS Notify</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Head>
  
        <div className={styles.background}>
          <Header />
          <SectionMain />
        </div>
        <WhatWeProvide />
        <FaqSection />
        <SuccessSection />
      </div>
    )
  }
}