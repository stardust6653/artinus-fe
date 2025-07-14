import styles from "./Footer.module.css";
import { footerConfig } from "@/config/footer";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <p className={styles.footerTitle}>{footerConfig.title}</p>
          <ul className={styles.footerLinks}>
            {footerConfig.links.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                >
                  {link.title} : {link.href}
                </a>
              </li>
            ))}
          </ul>
          <p className={styles.footerDescription}>
            Copyright 2025. Soye Park. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
