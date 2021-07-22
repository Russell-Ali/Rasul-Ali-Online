import CircleWrapper from "../Components/Contents/Circle/CircleWrapper";
import Navbar from "../Components/Navbar/Navbar";
import styles from "./Root.module.css";
const Root = () => {
  return (
    <div className={styles.canvas}>
      <Navbar />
      <CircleWrapper />
    </div>
  );
};

export default Root;
