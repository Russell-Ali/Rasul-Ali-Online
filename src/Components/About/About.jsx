import styles from "./About.module.css";
import AboutText from "./AboutText";
import CircleA from "./CircleA";
const About = () => {
  return (
    <div className={styles.aboutDiv}>
      <CircleA url="https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" />
      <AboutText />
    </div>
  );
};

export default About;
