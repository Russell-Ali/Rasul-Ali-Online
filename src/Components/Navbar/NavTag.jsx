import styles from "./NavTag.module.css";
const NavTag = (props) => {
  return (
    <div>
      <h1 className={styles.tag}>{props.TAG}</h1>
      {props.visible ? <div className={styles.underline}></div> : null}
    </div>
  );
};

export default NavTag;
