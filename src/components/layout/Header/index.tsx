import styles from "./Header.module.css";
import Banner from "@/components/common/Banner/Banner";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <span>Artinus Shop</span>
        <span className={styles.dot} />
      </h1>
      <Banner />
    </header>
  );
};

export default Header;
