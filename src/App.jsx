import { useState } from 'react'
import luminal_logo from './assets/luminal-logo.jpg'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="luminal-banner">
        <img
          src={luminal_logo}
          className="luminal-logo"
          alt="Luminal logo"
        />
        <p className="coming-soon">em breve</p>
      </div>
    </>
  )
}

export default App
