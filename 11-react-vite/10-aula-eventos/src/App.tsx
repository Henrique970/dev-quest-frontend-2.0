import { type ChangeEvent, type FormEvent, type KeyboardEvent } from 'react'

import './App.css'

function App() {

  const handleClick = (name: string) => {
    alert(`Botão clicado! Que loucura! Você clicou mesmo ${name}`)
  }

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    alert(`Você pressionou a tecla: ${event.key}, por que fez isso?`)
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // O "preventDefault" vai prevenir o comportamento padrão e fazer a página parar de recarregar.
    event.preventDefault();

    alert("O formulário foi enviado!")
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }

  return (
    <>
      {/* Foi colocado essa Arrow Function para que se pudesse usar o atributo dessa função. Se não colocasse iria dar erro */}
      <button onClick={() => handleClick("Henrique")}>Clique Aqui</button>

      <input type="text" onKeyDown={handleKeyPress} />

      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite algo..." onChange={handleChange}></input>
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}

export default App
