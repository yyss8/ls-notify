import styles from './InfoBox.module.scss';

const InfoBox = ({title, description, icon}) => {
  const hasIcon = Boolean(icon);

  return <div className={styles.infoBox}>
    <div className="d-flex align-items-center">
      <i className="fa fa-android"></i>
      {icon && <img src={`/images/what-we-provide-icons/${icon}`} />}
      <h5 className={hasIcon ? 'ml-3' : ''}>{title}</h5>
    </div>
    <p className={styles.description}>{description}</p>
  </div>
}

export default InfoBox;