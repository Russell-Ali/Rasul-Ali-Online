import styles from "./NavTag.module.css";
const NavTag = (props) => {
  return <h1 className={styles.tag}>{props.TAG}</h1>;
};

export default NavTag;
