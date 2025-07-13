"use client";

import styles from "./Header.module.css";
import Banner from "@/components/common/Banner/Banner";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.titleLink}>
        <h1 className={styles.titleContainer}>
          <div className={styles.title}>
            <span>Artinus Shop</span>
            <span className={styles.dot} />
          </div>
        </h1>
      </Link>
      {isHome && <Banner />}
    </header>
  );
};

export default Header;
