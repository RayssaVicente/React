import styles from "./styles.module.css"
import Titulo from "../Titulo"
import ProfileSection from "./ProfileSection"
import LinkBotao from "../LinkBotao"

export default function Profile(props){
    return(
        <div className={styles.container}>
            <img className={styles.perfilImg} src={props.perfilImg} alt={props.nome}></img>
            <Titulo>
                <span>{props.nome}</span>
                <button>Seguir</button>
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