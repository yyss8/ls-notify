import { useState } from 'react';
import Styles from './SectionMain.module.scss';
import { ReactSVG } from 'react-svg';
import ReactImageVideoLightBox from 'react-image-video-lightbox';

const SectionMain = () => {
  const [showVideo, setVideoState] = useState(false);

  return <section className={Styles.sectionMain}>
    <div className="container-lg text-center target">
      <h2 className={Styles.topHeading}>A Retail Group Made By Resellers For Resellers</h2>
      <h3 className={Styles.subHeading}>With all the tools and necessities you may need</h3>
      <h5><a className={Styles.checkoutButton}>Sold out</a></h5>
      <div className={Styles.sectionMainScreen}>
        <img src="/images/preview.png" />
        <a onClick={() => setVideoState(true)} className={Styles.videoPlayButton}>
          <ReactSVG src="/icons/play-button.svg" />
        </a>
      </div>
    </div>
    { showVideo && <div className={Styles.iframePopup}>
      <ReactImageVideoLightBox showResourceCount={false} startIndex={0} onCloseCallback={() => setVideoState(false)} data={[
      { url: 'https://www.youtube.com/embed/ru4_w94PAEI', type: 'video', altTag: 'LS Notify' },
    ]} />
    </div> }
  </section>
}

export default SectionMain;
