import { useState } from "react"

export default function useColecaoJogos(){

    const [jogos, setJogos] = useState([])

        const adicionarJogos = ({titulo, capa}) => {
        const id = Math.floor(Math.random() * 10000)
        const jogo = {id, titulo, capa}
        setJogos(state =>  {
            const novoState = [...state, jogo]
            localStorage.setItem("obc-jogo-lib", JSON.stringify(novoState))
            return novoState
        })
        }

        const removerJogo = (id) =>{
        setJogos(state => {
            const novoState = state.filter(jogo => jogo.id !== id)
            localStorage.setItem("obc-jogo-lib", JSON.stringify(novoState))
            return novoState
        })
        }
    
        return{jogos, adicionarJogos, removerJogo}
    
}