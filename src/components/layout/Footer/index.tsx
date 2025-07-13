import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <p className={styles.footerTitle}>Soye Park</p>
          <ul className={styles.footerLinks}>
            <li>
              <a href="mailto:stardust6653@gmail.com">
                Email : stardust6653@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://github.com/stardust6653"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github : https://github.com/stardust6653
              </a>
            </li>
            <li>
              <a
                href="https://dogpoop2dev.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog : https://dogpoop2dev.hashnode.dev/
              </a>
            </li>
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
