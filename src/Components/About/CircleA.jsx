import styles from "./CircleA.module.css";
const CircleA = (props) => {
  return (
    <div className={styles.circleDiv}>
      <img src={props.url} alt="🤓S" className={styles.circleImg} />
    </div>
  );
};

export default CircleA;
