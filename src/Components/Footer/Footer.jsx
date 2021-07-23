import styles from "./Footer.module.css";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={styles.footer}>
      <h1 className={styles.name}>By Rasul Ali</h1>
      <h1 className={styles.date}>__/__/2021</h1>
      <div className={styles.arrowDiv} onClick={scrollToTop}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            className={styles.arrow}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 0C15.5192 0 20 4.48083 20 10C20 15.5192 15.5192 20 10 20C4.48083 20 0 15.5192 0 10C0 4.48083 4.48083 0 10 0ZM10 0.833333C15.0592 0.833333 19.1667 4.94083 19.1667 10C19.1667 15.0592 15.0592 19.1667 10 19.1667C4.94083 19.1667 0.833333 15.0592 0.833333 10C0.833333 4.94083 4.94083 0.833333 10 0.833333ZM14.3725 13.3333L10 7.96667L5.61417 13.3333L5 12.7683L10 6.66667L15 12.7792L14.3725 13.3333Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default Footer;
