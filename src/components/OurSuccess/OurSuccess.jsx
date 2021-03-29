import styles from './OurSuccess.module.scss';

const OurSuccess = () => {
  return <section className={styles.ourSuccess} id="success">
    <div className="container-lg target">
      <h2 className="text-center">Our Success</h2>
      <div className={styles.image}>
        <div className="text-center">
          <img src="/images/combined-success.png" />
        </div>
      </div>
    </div>
  </section>
}

export default OurSuccess;