import './App.css'
import { Dashboard } from './components/Dashboards'
// import Card from './components/Card'
// import Tasks from './components/Tasks'


function App() {

  return (
    <>
      <Dashboard username= "Henrique"></Dashboard>
      <Dashboard username= {null}></Dashboard>
    </>
  )
}

export default App
