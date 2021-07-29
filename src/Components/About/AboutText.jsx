import styles from "./AboutText.module.css";
import { useState } from "react";
const AboutText = () => {
  const contactMe = {
    mail: "rasul.mail.00@mail.com",
    message: "Click To Copy",
    click: "Copied",
  };

  const [isHover, setIsHover] = useState(0);
  function clicked() {
    console.log("clicked");
    setIsHover(2);
    navigator.clipboard.writeText(contactMe.mail);
    setTimeout(() => setIsHover(0), 500);
  }
  function hovering() {
    console.log("hovering...");
    if (window.innerHeight <= 574) {
    } else {
      setTimeout(() => setIsHover(1), 100);
    }
  }
  function left() {
    console.log("left");
    if (window.innerHeight <= 574) {
    } else {
      setTimeout(() => setIsHover(0), 300);
    }
  }
  return (
    <div className={styles.textWrapper}>
      <h1 className={styles.heading}>Rəsul Ali</h1>
      <div className={styles.availableWrapper}></div>
      <button className={styles.available}>Currently available</button>
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
