import styles from "./About.module.css";
import AboutText from "./AboutText";
import CircleA from "./CircleA";
const About = () => {
  return (
    <div className={styles.aboutDiv}>
      <CircleA></CircleA>
      <AboutText />
    </div>
  );
};

export default About;
