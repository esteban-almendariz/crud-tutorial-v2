

const Customer = ({customerData}) => {


    return (
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
                                    <button>Update</button>
                                    <button className="delete-btn">Delete</button>
                                </div>
                            </div>
                        ))

                        }
            </div>
    )
}

export default Customer