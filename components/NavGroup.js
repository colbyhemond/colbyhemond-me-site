import Link from "next/link";
import styles from "./navgroup.module.css";
import HomeButton from './HomeButton'
import GitButton from './GitButton'
import BackButton from './BackButton'

const NavGroup = props => (
    <div className={styles.navRow}>
        <GitButton />
        { props.home ? <HomeButton /> : '' }
        { props.back ? <BackButton /> : '' }
    </div>
);

export default NavGroup;