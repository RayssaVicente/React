
import './App.css'
import {useState} from 'react'




function App() {

  const[senha, setSenha] = useState("")
  const [copiarTexto, setCopiarTexto] = useState("Copiar")

  function GeradorSenha (){
    const characters = "1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    const length = 12
    let novaSenha = ""
    for(let i = 0; i < length; i++){
      const posicao = Math.floor(Math.random() * characters.length)
      novaSenha += characters[posicao]
  }
    setSenha(novaSenha)
    setCopiarTexto("Copiar")
}

  

  function botaoCopiarSenha (ev){
    window.navigator.clipboard.writeText(senha)
    setCopiarTexto("Copiado")
  }



  return (
    <>
      
      <h1>Gerador de senhas</h1>
      <div className="card">
        
        <button onClick={GeradorSenha}>
          Gerar!
        </button>
        <button onClick={botaoCopiarSenha}>
          {copiarTexto}
        </button>

        <div>{senha}</div>

      </div>
    </>
  )
}


export default App
