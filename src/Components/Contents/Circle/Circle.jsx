import styles from "./Circle.module.css";
import CircleTag from "./CircleTag";
const Circle = (props) => {
  return (
    <>
      <div className={styles.circleDiv}>
        <CircleTag tag={props.Tag} />
        <img src={props.url} alt="😟" className={styles.circleImg} />
      </div>
    </>
  );
};
Circle.defaultProps = {
  Tag: "_blank",
};
export default Circle;
