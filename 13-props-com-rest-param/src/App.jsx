function Botao({ cor, tamanho, ...rest }) {
  const estilo = {
    backgroundColor: cor,
    fontSize: tamanho === "grande" ? "20px" : "14px",
  };

  return <button style={estilo} {...rest} />;
}

function App() {
  return (
    <Botao
      cor="blue"
      tamanho="grande"
      onClick={() => alert("Botão clicado!")}
      disabled={false}
    >
      Clique Aqui
    </Botao>
  );
}