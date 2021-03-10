import Link from "next/link";
import styles from "./footer.module.css";

const Footer = props => (
    <footer className={styles.footer}>
          Created by{' '}
          <img src="/Logo.svg" alt="Colby Hemond Logo" className={styles.logo} />
      </footer>
);

export default Footer;



