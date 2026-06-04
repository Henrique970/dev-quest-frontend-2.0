
import { useState } from 'react'
import './App.css'
import { MyInputNumber } from './components/MyInputNumber'

function App() {

  const [initialValue, setInitialValue] = useState(0)
  const [endValue, setEndValue] = useState(10)
  const [count, setCount] = useState(0)

  const incrementNumber = () => {
    if (count < endValue) {
      setCount(prev => prev + 1);
    } else {
      alert("O contador atingiu o valor máximo!")
    }

  }
  const decrementNumber = () => {
    if (count > initialValue) {
      setCount(prev => prev - 1);
    } else {
      alert("O contador atingiu o valor mínimo!")
    }
  }

  const updateInitialValue = (number: number) => {
    setInitialValue(number);
    setCount(number);
  }
  const updateEndValue = (number: number) => {
    setEndValue(number);
  };

  return (
    <>
      <h1>Contador Inteligente</h1>
      <MyInputNumber
        onInitialChange={updateInitialValue}
        onEndChange={updateEndValue}
      />
      <h2>Contador Atual: {count}</h2>
      <p>Configurado entre: {initialValue} e {endValue}</p>
    
      <button onClick={decrementNumber}>- Diminuir</button>
      <button onClick={incrementNumber} style={{ marginLeft: "10px" }}>+ Aumentar</button>
    </>
  )
}
export default App
