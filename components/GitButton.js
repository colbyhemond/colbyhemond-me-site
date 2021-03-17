import Link from "next/link";
import styles from "./button.module.css";

const GitButton = props => (
    <div>
    <Link href="https://github.com/colbyhemond">
    <a className={styles.button}>
      <div>
        <img src="/icons/github.svg"></img>
      </div>
    </a>
    </Link>
  </div>
);

export default GitButton;