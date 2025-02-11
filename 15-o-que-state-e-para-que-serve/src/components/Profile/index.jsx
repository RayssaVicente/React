import styles from "./styles.module.css"
import Titulo from "../Titulo"
import ProfileSection from "./ProfileSection"
import LinkBotao from "../LinkBotao"
import {useState} from "react"

export default function Profile(props){
    const [seguirTexto, setSeguirTexto] = useState("Seguir")

     function botao(ev){
        alert("você agora está seguindo!")
        setSeguirTexto("Seguindo")
        
    }

    return(
        <div className={styles.container}>
            <img className={styles.perfilImg} src={props.perfilImg} alt={props.nome}></img>
            <Titulo>
                <span>{props.nome}</span>
                <button onClick={botao}>
                    {seguirTexto}
                </button>
            </Titulo>
            <ProfileSection>{props.bio}</ProfileSection>
            <ProfileSection>{props.numero}</ProfileSection>
            <ProfileSection>{props.email}</ProfileSection>

            <div className={styles.links}>
                <LinkBotao href={props.githubUrl}>GitHub</LinkBotao>
                <LinkBotao href={props.linkedinUrl}>LinkedIn</LinkBotao>
                <LinkBotao href={props.twitterUrl}>Twitter</LinkBotao>
            </div>
        </div>
    )
}