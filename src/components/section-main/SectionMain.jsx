import Styles from './SectionMain.module.scss';

const SectionMain = () => {
  return <section className={Styles.sectionMain}>
    <div className="container-lg text-center">
      <h2 className={Styles.topHeading}>A Retail Group Made By Resellers For Resellers</h2>
      <h3 className={Styles.subHeading}>With all the tools and necessities you may need</h3>
      <div className={Styles.sectionMainScreen}>
        <img src="/images/section-main-screen.jpg" />
      </div>
    </div>
  </section>
}

export default SectionMain;
