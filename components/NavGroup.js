import Link from "next/link";
import styles from "./navgroup.module.css";
import HomeButton from './HomeButton'
import GitButton from './GitButton'

const NavGroup = props => (
    <div className={styles.navRow}>
        { props.home ? <HomeButton /> : '' }
        <GitButton />
    </div>
);

export default NavGroup;