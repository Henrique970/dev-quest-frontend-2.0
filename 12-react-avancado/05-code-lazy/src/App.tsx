// Suspense: Vai mostrar um fallback enquanto o filho não terminou de carrega. É a forma do React lidar com o carregamento a assíncrono dos componentes
import { Suspense, useState, lazy } from 'react'

// Estamos querendo criar um chunk, um pedaço de código, então importamos assim, dentro de uma variável.
const Modal = lazy(() => import('./components/Modal'))

function App() {
 const [isModalOpen, setIsModalOpen] = useState(false)

 const toggleModal = () => {
   setIsModalOpen(!isModalOpen)
 }

 return (
   <div>
     <h1>Exemplo de Lazy Loading com Modal</h1>
     <button onClick={toggleModal}>Abrir Modal</button>

     <Suspense fallback={<p>Carregando Modal...</p>}>
       {isModalOpen && <Modal />}
     </Suspense>
   </div>
 )
}

export default App