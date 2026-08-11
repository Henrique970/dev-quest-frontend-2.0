import { useEffect, useState } from 'react'
import './App.css'
import { MostraInicialização } from './components/MostraInicializacao'

function App() {

  const [count, setCount] = useState(0)

  useEffect (() => {
    // criamos um intervalo que vai será executado a cada 1 segundo
    const interval = setInterval(() => {

    })
  },);

  return (
    <>
      <h1>
        Contator: {count}
        <br />
        <button onClick={() => setCount(prev => prev + 1)}>Incrementar</button>
      </h1>
    </>
  )
}

export default App
