import { useState } from 'react'
import AddCustomer from './AddCustomer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AddCustomer />
    </>
  )
}

export default App
