import { useEffect, useRef } from "react";

import gsap from "gsap";

import styles from "./LogoSvg.module.css";

const LogoSvg = () => {
  const ref = useRef(null);
  useEffect(() => {
    const Circle = ref.current;
    let tlCircle = gsap.timeline();
    tlCircle
      .from(Circle, {
        x: "+=20",
        y: "+=20",
        duration: 1,
        ease: "none",
      })
      .from(Circle, {
        x: "-=20",
        y: "-=20",
        duration: 1,
        ease: "none",
      });
  });
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
          ref={ref}
        />
      </g>
    </svg>
  );
};

export default LogoSvg;
