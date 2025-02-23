
import Jogo from "./components/Jogos"
import FormNovosJogos from "./components/FormNovosJogos"
import useColecaoJogos from "./hook/useColecaoJogos"

export default function App(){
  const {jogos, adicionarJogos, removerJogo} = useColecaoJogos

  return(
    <div id="app">
      <h1>Biblioteca de Jogos</h1>

      <div className="jogos">
        <FormNovosJogos adicionarJogos={adicionarJogos}/>
      {jogos.map((jogo) => (
          <Jogo
          key={jogo.id}
          titulo={jogo.titulo}
          capa={jogo.capa}
          remover={() => removerJogo(jogo.id)}
          />
        ))}
      </div>
    </div>
  )
  
}