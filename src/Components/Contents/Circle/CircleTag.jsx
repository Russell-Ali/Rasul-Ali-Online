import styles from "./CircleTag.module.css";

const CircleTag = (props) => {
  return <h1 className={styles.circleTagH1}>{props.tag}</h1>;
};

export default CircleTag;
