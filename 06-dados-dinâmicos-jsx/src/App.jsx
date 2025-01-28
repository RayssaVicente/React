function soma(a, b){
  return a + b
}

export default function App(){
  const tech = 'Javascript'
  const status = true
  return (
    <div>
      <h1>{tech} é maravilhoso!</h1>
      <h2>É facil, como 1 + 1 é {soma(1, 1)}</h2>
      <h2>Status Atual: {status ? "ON" : "OFF"}</h2>
    </div>
  )
}