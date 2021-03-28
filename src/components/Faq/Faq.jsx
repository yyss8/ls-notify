import InfoBox from '../WhatWeProvide/InfoBox';
import styles from './Faq.module.scss';

const Faq = () => {
  return <section className={styles.faqSection} id="faq">
    <div className="container-lg">
      <div className={`text-center ${styles.icon}`}><img src="/images/site-logo.png" /></div>
      <h2 className="text-center">FAQ</h2>
      <div className="d-flex justify-content-between">
        <InfoBox title="How many sites do you monitor?" description="We monitor up to 20+ sites." />
        <InfoBox title="How do I get LS Notify?" description="You may join through restocks, giveaways or group buys." />
      </div>
      <div className="d-flex justify-content-center">
        <InfoBox title="Do you guys have 24/7 suupport?" description="Yes, we offer 24/7 support through all times." />
      </div>
    </div>
  </section>
}

export default Faq;
