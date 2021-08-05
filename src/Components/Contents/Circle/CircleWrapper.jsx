import Circle from "./Circle";
import styles from "./CircleWrapper.module.css";

const CircleWrapper = () => {
  return (
    <div className={styles.circleWrapperDiv}>
      <Circle url="https://placeimg.com/200/200/arch" />
      <Circle url="https://placeimg.com/200/200/arch" />
      <Circle url="https://placeimg.com/200/200/arch" />
      <Circle url="https://placeimg.com/200/200/arch" />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
    </div>
  );
};

export default CircleWrapper;
