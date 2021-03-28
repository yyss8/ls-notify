import styles from './InfoBox.module.scss';

const InfoBox = ({title, description, icon, style = 1}) => {
  const hasIcon = Boolean(icon);

  return <div className={`${styles.infoBox} ${styles[`infoBoxStyle${style}`]}`}>
    <div className="d-flex align-items-center">
      {icon && <img src={`/images/what-we-provide-icons/${icon}`} />}
      <h5 className={hasIcon ? 'ml-3' : ''}>{title}</h5>
    </div>
    <p className={styles.description}>{description}</p>
  </div>
}

export default InfoBox;