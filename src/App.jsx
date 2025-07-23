import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChangeHeading from './components/ChangeHeading'
import Calculator from './components/Calculator'
function App() {
  const [count, setCount] = useState(0)

  return (
    

    <>
     <ChangeHeading/> 
     <Calculator/>
      
    </>
  )
}

export default App
