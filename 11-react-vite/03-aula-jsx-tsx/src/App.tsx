import './App.css'

// Colocamos o parentese para colocar multiplas linhas de código HTML, caso seja necessário. 
// O fragment é utilizado pois é preciso ter uma tag pai para envolver o código HTML. E usamos ele quando não queremos uma tag com div, section, article, etc... Ele é representado por <> </>.
function App() {
  const name = "Espírito Santo";
  return (
    <>
      <h1> Bom dia, {name} </h1>
      <p>Eu te amo muito</p>
    </>
  );
}

export default App
