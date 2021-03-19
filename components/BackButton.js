import { useRouter } from 'next/router'
import styles from "./button.module.css";



export default function BackButton() {
    const router = useRouter()
    
    return(
    
    <div>
    <a className={styles.button} onClick={() => router.back()}>
      <div>
        <img src="../icons/left_arrow.svg"></img>
      </div>
    </a>
  </div>
)};