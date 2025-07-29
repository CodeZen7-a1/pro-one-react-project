import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Vegetables from './components/Vegetables'
import ChangeHeading from './components/ChangeHeading'
// import Calculator from './components/Calculator'
import ContactForm from './components/ContactForm/ContactForm'

function App() {
  const [count, setCount] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [user, setUser] = useState("Alice")




  return (


    <>
      <ContactForm />
      <Vegetables />

      <div className="container p-5 border border-2 border-black bg-light mb-5" style={{ boxShadow: "3px 3px 3px black, 7px 7px 7px lightgray" }}>
        {isLoggedIn ? (
          <>
            <h1 className="">User Logged IN</h1>
            {/* <button onClick={()=>setIsLoggedIn(false)}>Login</button> */}
          </>
        )
          :
          (
            <>
              <h1 className="">Please Login</h1>
              {/* <button onClick={()=>setIsLoggedIn(true)}>Log Out</button> */}
            </>
          )}

        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? 'Login' : 'Logout'}</button>

        <h1 className={`${isLoggedIn ? 'greenBlock' : 'RedBlock'}`}> Focus On New Styles</h1>

        <h1>{isLoggedIn && <span>{user}</span>}</h1>
      </div>



      <ChangeHeading />
      {/* <Calculator /> */}

    </>
  )
}

export default App
