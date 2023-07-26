import styles from "../scss/Alert.module.scss";
export default function Alert({ type, text }) {
  return (
    <div className={`${styles.alert} ${styles[`alert-${type}`]}`}>{text}</div>
  );
}