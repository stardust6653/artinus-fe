import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.notFoundContainer}>
      <div className={styles.notFoundContent}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>페이지를 찾을 수 없습니다</h2>
        <p className={styles.description}>
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <Link href="/" className={styles.homeButton}>
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
