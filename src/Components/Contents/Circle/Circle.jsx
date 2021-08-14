import styles from "./Circle.module.css";
import CircleTag from "./CircleTag";
const Circle = (props) => {
  return (
    <>
      <div className={styles.circleDiv}>
        <CircleTag tag={props.Tag} />
        <a href={props.href} target="_blank" rel="noopener noreferrer">
          <img src={props.url} alt="😶" className={styles.circleImg} />
        </a>
      </div>
    </>
  );
};
Circle.defaultProps = {
  Tag: "_blank",
};
export default Circle;
