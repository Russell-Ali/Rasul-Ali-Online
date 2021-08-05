import styles from "./AboutText.module.css";
import { useState } from "react";
import { HoverDiv } from "./Three/Three";
const AboutText = () => {
  const contactMe = {
    mail: "rasul.mail.00@mail.com",
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
      console.log("🤩clicked");
      setIsHover(2);
      setIsClicked("clicked");
      navigator.clipboard.writeText(contactMe.mail);
      setTimeout(() => {
        setIsHover(0);
        setIsClicked("");
      }, 500);
    } else {
      console.log("nope");
    }
  }
  function hovering() {
    if (Width <= 574) {
    } else if (navigator.clipboard && window.isSecureContext) {
      console.log("😃hovering...");
      setIsHover(1);
    }
  }
  function left() {
    if (Width <= 574) {
    } else if (navigator.clipboard && window.isSecureContext) {
      console.log("left😢");
      setTimeout(() => setIsHover(0), 300);
    }
  }
  return (
    <div className={styles.textWrapper}>
      <h1 className={styles.heading}>Rasul Ali</h1>
      <HoverDiv />
      <p className={styles.paragraphBig}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        omnis, natus enim dolore corrupti assumenda veritatis distinctio illo
        aliquam? Fugit, consectetur sit dolorum, aperiam repellat dignissimos ab
        temporibus totam cumque eveniet maxime quae perferendis a delectus illum
        non iusto veniam architecto cum reprehenderit recusandae. Ullam corrupti
        modi necessitatibus possimus cumque.
      </p>
      <p className={styles.paragraphMid}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos dolores
        provident rerum necessitatibus quas ullam optio suscipit, possimus est
        quia.
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
