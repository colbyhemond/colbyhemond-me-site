import Link from "next/link";
import styles from "./homebutton.module.css";

const HomeButton = props => (
    <div>
    <Link href="/">
    <a className={styles.button}>
      <div>
        <img src="/icons/house.svg"></img>
      </div>
    </a>
    </Link>
  </div>
);

export default HomeButton;
