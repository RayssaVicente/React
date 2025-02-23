import postImg from "../../assets/panico-post.jpg"
import styles from "./style.module.css"

export default function Cards(){
    return(
        <div className={styles.container}>
            <img src={postImg} alt="Post do filme pânico"/>
            <div>
                <h1 className={styles.title}>Poster: Pânico</h1>
                <p className={styles.description} >Esse é um filme slash consagrado e que é um dos ícones da cultura pop, alem de ser o inicio da franquia pânico, assista o não só esse filme mais toda a franquia e brinque de tentar adivinhar como a trama ira se desenrolar é quem é o glost face, será que você conseguira acerta de primeira?</p>
                
                <button className={styles.botao}>Comprar aqui</button>
            </div>
        </div>
    )
}