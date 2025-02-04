import Status from "./components/Status"
import Subtitulo from "./components/Title/Subtitulo"
import Titulo from "./components/Title/Titulo"

export default function App() {
  return (
    <div className={styles.app} //importção de css modules
    >
      <Titulo />
      <Subtitulo />
      <Status />
    </div>
  )
}