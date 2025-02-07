import styles from "./style.module.css"
import Botao from "./Botao/index"

export default function Cards({titulo, postImg}){
    return(
        <div className={styles.container}>
            <img src={postImg} alt={titulo}/>
            <div>
                <h1 className={styles.title}>{titulo}</h1>
                <p className={styles.description} >Esse é um filme slash consagrado e que é um dos ícones da cultura pop, alem de ser o inicio da franquia pânico, assista o não só esse filme mais toda a franquia e brinque de tentar adivinhar como a trama ira se desenrolar é quem é o glost face, será que você conseguira acerta de primeira?</p>
                
                <Botao/>
            </div>
        </div>
    )
}