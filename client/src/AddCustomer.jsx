import { useState } from "react"


const AddCustomer = () => {

const [customerData, setCustomerData] = useState({
    companyName: '',
    phoneNumber: '',
    address: '',
    website: ''
})

const [dummyData, setDummyData] = useState([])

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
            <div className="flex-row-container">
                {dummyData.map(customer => (
                            <div className="customer-list-container">
                                <div className="info">
                                    <span>Company Name:</span>
                                    <p>{customer.companyName}</p>
                                </div>
                                <div className="info">
                                    <span>Phone Number:</span>
                                    <p>{customer.phoneNumber}</p>
                                </div>
                                <div className="info">
                                    <span>Address:</span>
                                    <p>{customer.address}</p>
                                </div>
                                <div className="info">
                                    <span>Website:</span>
                                    <p>{customer.website}</p>
                                </div>
                                <div>
                                    <button>Update</button>
                                    <button className="delete-btn">Delete</button>
                                </div>
                            </div>
                        ))

                        }
            </div>
        </div>
    )
}

export default AddCustomer