import { useEffect, useRef } from "react";

import gsap from "gsap";

import styles from "./Logo.module.css";

export const LinesSvg = () => {
  return (
    <svg viewBox="0 0 220 220" fill="none" className={styles.logo}>
      <g id="Lines">
        <line
          id="Y"
          x1="33.0239"
          y1="211"
          x2="33.0239"
          y2="9"
          strokeWidth="5"
        />
        <path id="Z" d="M34 10.1413L184.093 209.761" strokeWidth="5" />
      </g>
    </svg>
  );
};
export const CircleSvg = () => {
  const tlCircle = gsap.timeline();
  const ref = useRef();
  const Clicked = () => {
    const Circle = ref.current;
    if (!tlCircle.isActive()) {
      tlCircle
        .to(Circle, {
          rotationX: "-25",
          rotateY: "-10",
          duration: 0.1,
          ease: "sine.out",
        })
        .to(Circle, { rotationX: 0, rotateY: 0, duration: 0.1, ease: "linear" })
        .to(Circle, { y: 38, duration: 1, ease: "bounce.out" })
        .to(Circle, {
          y: 0,
          duration: 1,
          ease: "elastic.out",
          delay: 0.6,
        });
    }
  };
  return (
    <svg
      onClick={Clicked}
      viewBox="0 0 220 220"
      fill="none"
      className={styles.logo}
      ref={ref}
    >
      <circle
        id="O"
        cx="110.524"
        cy="85.9996"
        r="75"
        fill="none"
        strokeWidth="5"
      />
    </svg>
  );
};
export const AroundSvg = () => {
  const Length = 628.3203125;
  const ref = useRef();
  const ref2 = useRef();
  useEffect(() => {
    const pathSvg = ref.current;
    const aroundSvg = ref2.current;
    const tlPath = gsap.timeline({ repeat: -1, repeatDelay: 3 });
    const tlAround = gsap.timeline({ repeat: -1 });
    tlAround.to(aroundSvg, {
      rotateZ: "+=360",
      duration: 6,
      ease: "sine.out",
    });
    tlPath
      .to(pathSvg, {
        strokeDashoffset: `+=${Length * (2 / 3)}`,
        duration: 2,
        ease: "linear",
      })
      .to(pathSvg, {
        strokeDashoffset: `+=${Length}`,
        duration: 3,
        ease: "linear",
      })
      .to(pathSvg, {
        strokeDashoffset: `+=${Length / 3}`,
        duration: 1,
        ease: "linear",
      });
  });
  return (
    <svg
      width="220"
      height="220"
      viewBox="0 0 220 220"
      fill="none"
      className={styles.around}
      ref={ref2}
    >
      <g id="Frame 1">
        <path
          ref={ref}
          className={styles.path}
          d="M10 110C10 136.522 20.5357 161.957 39.2893 180.711C58.043 199.464 83.4784 210 110 210C136.522 210 161.957 199.464 180.711 180.711C199.464 161.957 210 136.522 210 110C210 83.4784 199.464 58.043 180.711 39.2893C161.957 20.5357 136.522 10 110 10C83.4784 10 58.043 20.5357 39.2893 39.2893C20.5357 58.043 10 83.4784 10 110"
          strokeWidth="3"
          strokeDasharray={Length}
          strokeDashoffset={Length / 3}
        />
      </g>
    </svg>
  );
};
