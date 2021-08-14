import styles from "./About.module.css";
import AboutText from "./AboutText";
import CircleA from "./CircleA";
import Credits from "./Credits";
import avatar from "../Contents/assets/avatar.png";
const About = () => {
  return (
    <div className={styles.aboutDiv}>
      <CircleA url={avatar} />
      <AboutText />
      <Credits />
    </div>
  );
};

export default About;
