
import './App.css'
import MyFirstClassComponent from './components/MyFirstClassComponents'

// Pegando o componente criado e importando para o App.tsx, para que ele seja renderizado na tela. Esses componentes não precisaram ser criados do 0 novamente, e sim apenas importados.

function App() {
  return <>
    <MyFirstClassComponent />
  </>;

}

export default App
