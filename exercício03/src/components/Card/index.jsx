import styles from "./styles.module.css"

export default function Card({perfilImg, titulo, subtitulo,numero,email}){
    return(
        <div className={styles.container}>
            <img className={styles.perfil} src={perfilImg} alt={titulo}></img>
            
            <h1 className={styles.centraliza}>{titulo}</h1>
            <hr className={styles.linha}></hr>

            <h2>{subtitulo}</h2>
            <hr className={styles.linha}></hr>

            <p className={styles.centraliza}>{numero}</p>
            <hr className={styles.linha}></hr>

            <p className={styles.centraliza}>{email}</p>
            <hr className={styles.linha}></hr>

            <button className={styles.botao}>GitHub</button>
            <button className={styles.botao}>Linkdein</button>
            <button className={styles.botao}>Twitter</button>
        </div>
    )
}