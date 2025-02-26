import perfilImg from "./assets/perfil.jpg"
import Card from "./components/Card"


export default function App(){
  return(
    <div>
      <Card perfilImg={perfilImg} titulo="Jonh Doe" subtitulo="Full-stack developer at Acme Inc" numero="+5511987654321" email="Jonh.doc@email.com"/>
    </div>
  )
}