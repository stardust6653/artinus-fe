import styles from "./LoadingSpinner.module.css";

interface LoadingSpinnerProps {
  text?: string;
  size?: "small" | "medium" | "large";
}

export default function LoadingSpinner({
  text = "로딩 중...",
  size = "medium",
}: LoadingSpinnerProps) {
  return (
    <div className={styles.container}>
      <div className={`${styles.spinner} ${styles[size]}`}></div>
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
}
