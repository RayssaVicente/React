import { useRef, useState } from "react";
import RefExample from "./RefExample";

function App() {
  let variable = 0 // zera o valor depois da renderização
  const ref = useRef(0); //pesiste o valor mesmo apos a renderização
  let [state, setState] = useState(0); //renderiza é atualiza o valor

  const showValues = () => {
    alert(`
      Variável: ${variable}
      Ref: ${ref.current}
      State: ${state}
    `)
  }

  return (
    <div>
      <p>Variável: {variable}</p>
      <p>Ref: {ref.current}</p>
      <p>State: {state}</p>
      <button onClick={() => variable++}>Aumentar Variável</button>
      <button onClick={() => ref.current++}>Aumentar Ref</button>
      <button onClick={() => setState(state => state + 1)}>Aumentar State</button>
      <button onClick={showValues}>Exibir valores</button>
      <hr />
      <RefExample />
    </div>
  );
}

export default App