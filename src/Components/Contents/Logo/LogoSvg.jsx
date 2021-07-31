import styles from "./LogoSvg.module.css";

const LogoSvg = () => {
  return (
    <svg
      width="220"
      className={styles.logo}
      height="220"
      viewBox="0 0 220 220"
      fill="none"
    >
      <g id="Logo">
        <g id="Lines">
          <line
            id="Y"
            x1="33.0239"
            y1="211"
            x2="33.0239"
            y2="9"
            stroke="black"
            strokeWidth="5"
          />
          <path
            id="Z"
            d="M34 10.1413L184.093 209.761"
            stroke="black"
            strokeWidth="5"
          />
        </g>
        <circle
          id="O"
          cx="110.524"
          cy="85.9996"
          r="75"
          fill="white"
          stroke="black"
          strokeWidth="5"
        />
      </g>
    </svg>
  );
};

export default LogoSvg;
