import styles from "./styles.module.css"

export default function Titulo(props) {
  return <h2 className={styles.wrapper}>{props.children}</h2>
}