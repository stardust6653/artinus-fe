"use client";

import styles from "./Banner.module.css";

export default function Banner() {
  const onButtonClick = () => {
    window.open("https://dott.kr/", "_blank");
  };

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <h2 className={styles.title}>DOTT</h2>
        <p className={styles.subtitle}>예술적 감성을 담은 특별한 컬렉션</p>
        <button className={styles.cta} onClick={onButtonClick}>
          컬렉션 보기
        </button>
      </div>
      <div className={styles.decorative}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
      </div>
    </div>
  );
}
