import Circle from "./Circle";
import styles from "./CircleWrapper.module.css";

const CircleWrapper = () => {
  return (
    <div className={styles.circleWrapperDiv}>
      <Circle url="https://images.unsplash.com/photo-1608909792165-090f23329327?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" />
      <Circle url="https://images.unsplash.com/photo-1567161483041-a28df470c9ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80" />
      <Circle url="https://images.unsplash.com/photo-1622724894668-7b6ee5ad6a2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" />
      <Circle url="https://images.unsplash.com/photo-1587474214921-0d6dbbee0e83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" />
      <Circle url="https://images.unsplash.com/photo-1574107623712-9af13d8ef2e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
      <Circle />
      <Circle />
      <Circle />
    </div>
  );
};

export default CircleWrapper;
