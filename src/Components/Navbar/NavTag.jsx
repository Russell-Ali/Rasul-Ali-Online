import { useState } from "react";
import styles from "./NavTag.module.css";
const NavTag = (props) => {
  const [active, setActive] = useState(true);
  return (
    <div>
      <h1 className={styles.tag}>{props.TAG}</h1>
      {props.visible ? (
        <div
          className={`${styles.underline} ${active ? styles.active : null}`}
        ></div>
      ) : null}
    </div>
  );
};

export default NavTag;
