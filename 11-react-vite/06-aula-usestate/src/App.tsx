 import { useState } from 'react';
import './App.css'
import { MyInput } from './components/MyImput';

function App() {

  // useState é um hook do React que permite adicionar estado a componentes funcionais. Ele retorna um array com dois elementos: o valor atual do estado e uma função para atualizá-lo. O argumento passado para useState é o valor inicial do estado.
  // Não precisa colocar tipo, póis quando coloca o 0 ele já entende que é number.
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    // prev é o valor anterior do count. 
    setCount(prev => prev + 1);
  };

  const decrementCount = () => {
    setCount(prev => prev - 1);
  };

  const resetCount = () => {
    setCount(0);
  };
  return (
    <>
    <h2>Contador: {count}</h2>
      <button onClick={incrementCount}>
        Incrementar contador
      </button>
      <button onClick={decrementCount}>
        Decrementar contador
      </button>
      <button onClick={resetCount}>
        Resetar contador
      </button>

      <MyInput></MyInput>
    </>
  )
}

export default App
