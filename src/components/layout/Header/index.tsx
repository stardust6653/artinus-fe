"use client";

import styles from "./Header.module.css";
import Banner from "@/components/common/Banner/Banner";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <span>Artinus Shop</span>
        <span className={styles.dot} />
      </h1>
      {isHome && <Banner />}
    </header>
  );
};

export default Header;
