import styles from "./AboutText.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmileBeam, faLaughBeam } from "@fortawesome/free-regular-svg-icons";
const AboutText = () => {
  const contactMe = {
    mail: "rasul.aliyev2000@outlook.com",
    message: "Click To Copy",
    click: "Copied",
  };
  let MailStyle;
  const [Width] = useState(window.innerWidth);
  if (navigator.clipboard && window.isSecureContext) {
    MailStyle = "none";
  } else {
    MailStyle = "all";
  }
  const [isClicked, setIsClicked] = useState("");
  const [isHover, setIsHover] = useState(0);
  function clicked() {
    if (navigator.clipboard && window.isSecureContext) {
      setIsHover(2);
      setIsClicked("clicked");
      navigator.clipboard.writeText(contactMe.mail);
      setTimeout(() => {
        setIsHover(0);
        setIsClicked("");
      }, 500);
    }
  }
  function hovering() {
    if (Width <= 574) {
    } else if (navigator.clipboard && window.isSecureContext) {
      setIsHover(1);
    }
  }
  function left() {
    if (Width <= 574) {
    } else if (navigator.clipboard && window.isSecureContext) {
      setTimeout(() => setIsHover(0), 300);
    }
  }
  return (
    <div className={styles.textWrapper}>
      <h1 className={styles.heading}>Rasul Ali</h1>
      <p className={styles.paragraphBig}>
        Hi, welcome to my humble page. Originally I thought to make this in as a
        portfolio. But because I haven't done many big projects to fulfill
        potential employers I stumbled upon that idea which you see right now.
        Nonetheless, if you feel like giving me chance, first of all, thank you.
        <FontAwesomeIcon icon={faSmileBeam} style={{ fontSize: "14" }} />{" "}
        Secondly, you can check my
        <a
          href="https://github.com/Russell-Ali"
          target="_blank"
          rel="noopener noreferrer"
          id={styles.github}
        >
          {" Github "}
        </a>
        page. Depending on the time you visit it, the number of projects here
        may have changed.
      </p>
      <p className={styles.paragraphMid}>
        I hope you enjoyed this concept. If the social media links you see do
        not go to my page that means I still didn't create one. But email is
        real, don't worry.
        <FontAwesomeIcon icon={faLaughBeam} style={{ fontSize: "14" }} />
      </p>
      <span className={styles.divider}></span>
      <p
        id={styles[isClicked]}
        style={{
          userSelect: MailStyle,
        }}
        className={styles.paragraphMail}
        onClick={clicked}
        onMouseEnter={hovering}
        onMouseLeave={left}
      >
        {(isHover === 1 && contactMe.message) ||
          (isHover === 0 && contactMe.mail) ||
          (isHover === 2 && contactMe.click)}
      </p>
      <span className={styles.divider2}></span>
      <p className={styles.paragraphSocial}>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <a href="https://fb.com" target="_blank" rel="noopener noreferrer">
          FaceBook
        </a>
      </p>
    </div>
  );
};
export default AboutText;
