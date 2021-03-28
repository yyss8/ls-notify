import styles from './OurSuccess.module.scss';

const OurSuccess = () => {
  return <section className={styles.ourSuccess} id="success">
    <h2 className="text-center">Our Success</h2>
    <div className={`${styles.image} container-lg`}>
      <div className="text-center">
        <img src="/images/combined-success.png" />
      </div>
    </div>
  </section>
}

export default OurSuccess;