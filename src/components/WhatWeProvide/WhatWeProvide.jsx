import Styles from './WhatWeProvide.module.scss';
import InfoBox from './InfoBox';

const WhatWeProvide = () => {
  const infoBoxes = [
    { title: 'Website Monitors', icon: 'pc.png', description: 'Our group provides you with the highest quality monitors.' },
    { title: 'Tools', icon: 'globe.png', description: 'LS Notify will supply you with the best tools around to help your resell game.' },
    { title: 'AIO/Proxy partnerships', icon: 'robotic.png', description: 'Discounts on AIO bots and proxies that you do not want to miss out on' },
    { title: 'Sneaker/Release channels', icon: 'download.png', description: 'Specific channels allocated to easy profit releases that allow you all info to do so.' },
  ];

  return <section className={Styles.whatWeProvideSection} id="feautres">
    <div className={`container-lg ${Styles.layerCenter}`}>
      <h2>What do we provide?</h2>
      <div className={`d-flex flex-wrap justify-content-between ${Styles.infoBoxes}`}>
        {infoBoxes.map(infoBox => <InfoBox title={infoBox.title} icon={infoBox.icon} description={infoBox.description} />)}
      </div>
    </div>
    <div className={Styles.layerLeft}></div>
    <div className={Styles.layerRight}></div>
  </section>
}

export default WhatWeProvide;