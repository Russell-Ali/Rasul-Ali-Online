import Circle from "./Circle";
import CircleTag from "./CircleTag";
import styles from "./CircleWrapper.module.css";

const CircleWrapper = () => {
  return (
    <div className={styles.circleWrapperDiv}>
      <Circle>
        <CircleTag />
      </Circle>
      <Circle>
        <CircleTag />
      </Circle>
      <Circle>
        <CircleTag />
      </Circle>
      <Circle>
        <CircleTag />
      </Circle>
      <Circle>
        <CircleTag />
      </Circle>
      <Circle>
        <CircleTag />
      </Circle>
      <Circle>
        <CircleTag />
      </Circle>
      <Circle>
        <CircleTag />
      </Circle>
    </div>
  );
};

export default CircleWrapper;
