import styles from "./Circle.module.css";
import CircleTag from "./CircleTag";
const Circle = (props) => {
  return (
    <>
      <div className={styles.circleDiv}>
        <CircleTag tag={props.Tag} />
      </div>
    </>
  );
};
Circle.defaultProps = {
  Tag: "_blank",
};
export default Circle;
