
import { useState } from 'react'
import './App.css'
import useCounter from './hooks/useCounter'

function App() {
  const { count, increment } = useCounter()
  

  return (
    <>
      
      <h1>Vite + React</h1>
      <div className="card">
      <button onClick={increment}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
    </>
  )
}

export default App
