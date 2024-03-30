import { useState } from 'react'

import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Signup />
      <Login />
      {/* <Home ></Home> */}
        
    </>
  )
}

export default App
