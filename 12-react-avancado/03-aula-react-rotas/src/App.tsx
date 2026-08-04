import { BrowserRouter } from "react-router-dom"
import { Router } from "./routes"

function App() {

  return (
    // É como se fosse um gerente que vai observar a URL, quando você clica um link, ele vai avisar os componentes Routes para renderizar o conteúdo correto.
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
