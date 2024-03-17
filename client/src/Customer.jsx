import { useState } from "react"
import axios from 'axios'

const Customer = ({customerData}) => {

    const [updatedCustomerData, setUpdatedCustomerData] = useState('')
    const [isUpdateForm, setIsUpdateForm] = useState(false)

    const handleFormChange = (e) => {
        const {name, value} = e.target
        setUpdatedCustomerData(prevState => {
            return {
                ...prevState, [name]: value
            }
        })
    
    }
    
    const handleFormSubmit = async(e) => {
       try{
            await axios.put('http://localhost:5174/customers/'+updatedCustomerData.id, updatedCustomerData)
       }
       catch(err) {
        console.log(err)
       }
    }

    const handleUpdate = (customer, id) => {
        setUpdatedCustomerData(customer)
        setIsUpdateForm(prevState => !prevState)
    }

    const handleDelete = async(id) => {
        try{
            await axios.delete('http://localhost:5174/customers/'+id)
            window.location.reload()
        }
        catch(err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h1 className="title">{isUpdateForm ? 'Update Customer': 'Customer List'}</h1>
            {isUpdateForm && <form onSubmit={handleFormSubmit} className="container">
                <div className="company-info">
                    <input
                        type="text"
                        placeholder="Company Name" 
                        onChange={handleFormChange}
                        value={updatedCustomerData.companyName}
                        name='companyName'
                    />
                    <input 
                        type="text"
                        placeholder="Phone Number" 
                        onChange={handleFormChange}
                        value={updatedCustomerData.phoneNumber}
                        name="phoneNumber"
                    />
                    <input 
                        type="text"
                        placeholder="Address" 
                        onChange={handleFormChange}
                        value={updatedCustomerData.address}
                        name='address'
                    />
                    <input 
                        type="text"
                        placeholder="Website" 
                        onChange={handleFormChange}
                        value={updatedCustomerData.website}
                        name='website'
                    />
                    <button>Update</button>
                </div>
            </form>}
            <div className="flex-row-container">
                {customerData.map(customer => (
                            <div className="customer-list-container" key={customer.id}>
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
                                    <button onClick={() =>handleUpdate(customer, customer.id)}>Update</button>
                                    <button onClick={()=>handleDelete(customer.id)} className="delete-btn">Delete</button>
                                </div>
                            </div>
                        ))

                        }
            </div>
        </div>
    )
}

export default Customer