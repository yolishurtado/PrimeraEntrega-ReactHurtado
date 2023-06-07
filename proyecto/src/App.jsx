import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <NavBar/>
  <ItemListContainer greeting = {"Proximamente"} />

    <div className="fondo">
      {/* Contenido de tu página */}
    </div>


  </>
  )
  }

export default App
