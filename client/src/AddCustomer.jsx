import { useState } from "react"


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

const handleFormSubmit = (e) => {
    e.preventDefault()
    
    setDummyData(prevState => {
        return [
            ...prevState, customerData
        ]
    })
    console.log(dummyData)
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