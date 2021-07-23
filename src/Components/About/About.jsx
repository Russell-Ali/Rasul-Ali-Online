import styles from "./About.module.css";
import AboutTexts from "./AboutText";
import CircleA from "./CircleA";
const About = () => {
  return (
    <div className={styles.aboutDiv}>
      <CircleA></CircleA>
      <AboutTexts />
    </div>
  );
};

export default About;
