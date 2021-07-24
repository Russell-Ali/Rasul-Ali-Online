import styles from "./AboutText.module.css";
const AboutText = () => {
  return (
    <div className={styles.textWrapper}>
      <h1 className={styles.heading}>Lorem, ipsum dolor.</h1>
      <div className={styles.availableWrapper}></div>
      <h1 className={styles.available}>Currently available</h1>
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
      <p className={styles.paragraphMail}>rasul.mail.00@mail.com</p>
      <span className={styles.divider2}></span>
      <p className={styles.paragraphSocial}>
        <a href="#">Instagram</a> <a href="#">Twitter</a>{" "}
        <a href="#">Linkedin</a> <a href="#">FaceBook</a>
      </p>
    </div>
  );
};

export default AboutText;
