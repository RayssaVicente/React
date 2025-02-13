import './App.css'
import {useState} from 'react'
import Input from './components/Inputs'




function App() {

  const[senha, setSenha] = useState("")
  const [customizarSenha, setCustomizarSenha] = useState(12)
  const [mostrarInput, setMostrarInput] = useState(false)
  const [copiarTexto, setCopiarTexto] = useState("Copiar")
  
 const tamanhoSenha = mostrarInput ? customizarSenha : 8
  

  function GeradorSenha (){
    const characters = "1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let novaSenha = ""
    for(let i = 0; i < tamanhoSenha; i++){
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
      <div>
          <label htmlFor="mostrarInput">Customizar tamanho </label>
          <input type="checkbox" id="mostrarInput" value={mostrarInput}
          onChange={() => setMostrarInput(show => !show)}
          />
      </div>
        {mostrarInput && (
          <div>
            <label htmlFor="customizarSenha">Tamanho: </label>
            <Input tamanhoSenha={customizarSenha} setTamanhoSenha={setCustomizarSenha}/>
          </div>
        )}
        
        
        <button onClick={GeradorSenha}>
          Geraar senha de {mostrarInput ? tamanhoSenha : 8} caracteres
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
