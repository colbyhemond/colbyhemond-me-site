import Link from "next/link";
import styles from "./footer.module.css";
import Image from 'next/image'


const Footer = props => (
    <footer className={styles.footer}>
          Created by{' '}
          <Image src="/Logo.svg" alt="Colby Hemond Logo" className={styles.logo} width='200' height='100'/>
      </footer>
);

export default Footer;



