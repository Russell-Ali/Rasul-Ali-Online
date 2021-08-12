import styles from "./About.module.css";
import AboutText from "./AboutText";
import CircleA from "./CircleA";
import Credits from "./Credits";
const About = () => {
  return (
    <div className={styles.aboutDiv}>
      <CircleA />
      <AboutText />
      <Credits />
    </div>
  );
};

export default About;
