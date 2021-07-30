import styles from "./About.module.css";
import AboutText from "./AboutText";
import CircleA from "./CircleA";
const About = () => {
  return (
    <div className={styles.aboutDiv}>
      <CircleA url="https://placeimg.com/200/200/animals" />
      <AboutText />
    </div>
  );
};

export default About;
