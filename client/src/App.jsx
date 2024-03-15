import { useEffect, useState } from 'react'
import AddCustomer from './AddCustomer'
import Customer from './Customer'
import axios from 'axios'
import './App.css'

function App() {
  const [customerData, setCustomerData] = useState([])

  useEffect(() => {
    const fetchCustomers = async() => {
      try{
        const res = await axios.get('http://localhost:5174/customers')
        setCustomerData(res.data)
      }
      catch(err) {
        console.log(err)
      }
    }
    fetchCustomers()
  }, [])



  return (
    <>
     <AddCustomer />
     <Customer customerData={customerData}/>
    </>
  )
}

export default App
