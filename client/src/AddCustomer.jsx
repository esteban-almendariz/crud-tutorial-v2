import { useState } from "react"
import axios from 'axios'


const AddCustomer = () => {

const [customerData, setCustomerData] = useState({
    companyName: '',
    phoneNumber: '',
    address: '',
    website: ''
})

const handleFormChange = (e) => {
    const {name, value} = e.target
    setCustomerData(prevState => {
        return {
            ...prevState, [name]: value
        }
    })

}

const handleFormSubmit = async(e) => {
    e.preventDefault()
   try {
        await axios.post('http://localhost:5174/create', customerData)
        console.log('new customer sent')
        window.location.reload()
   }
   catch(err) {
    console.log(err)
   }
}

    return (
        <div>
            <h1 className="title">Add New Customer</h1>
            <form onSubmit={handleFormSubmit} className="container">
                <div className="company-info">
                    <input
                        type="text"
                        placeholder="Company Name" 
                        onChange={handleFormChange}
                        value={customerData.company}
                        name='companyName'
                    />
                    <input 
                        type="text"
                        placeholder="Phone Number" 
                        onChange={handleFormChange}
                        value={customerData.phoneNumber}
                        name="phoneNumber"
                    />
                    <input 
                        type="text"
                        placeholder="Address" 
                        onChange={handleFormChange}
                        value={customerData.address}
                        name='address'
                    />
                    <input 
                        type="text"
                        placeholder="Website" 
                        onChange={handleFormChange}
                        value={customerData.website}
                        name='website'
                    />
                    <button>Submit</button>
                </div>
            </form>
            
        </div>
    )
}

export default AddCustomer