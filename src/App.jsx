//4-importamos o outlet para renderizar os componentes filhos(home e new post) deste projeto
import { Outlet } from 'react-router-dom'
//6- importamos o navbar e com o é o cabeçalho ele irá ficar acima da div container
import Navbar from './components/Navbar'
import './App.css'

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Outlet/>
      </div>
    </div>
  )
}

export default App
