import Circle from "./Circle";
import styles from "./CircleWrapper.module.css";

const CircleWrapper = () => {
  return (
    <div className={styles.circleWrapperDiv}>
      <Circle></Circle>
      <Circle></Circle>
      <Circle></Circle>
      <Circle></Circle>
      <Circle Tag="Whatever 5"></Circle>
      <Circle Tag="Whatever 6"></Circle>
      <Circle Tag="Whatever 7"></Circle>
      <Circle Tag="Whatever 8"></Circle>
      <Circle></Circle>
      <Circle></Circle>
      <Circle></Circle>
      <Circle></Circle>
      <Circle></Circle>
      <Circle></Circle>
      <Circle></Circle>
      <Circle></Circle>
    </div>
  );
};

export default CircleWrapper;
