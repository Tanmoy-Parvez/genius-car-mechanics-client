import React, { useEffect, useState } from 'react';

const ManageService = () => {
    const [services, setServices] = useState([])
    const [deleteService, setDeleteService] = useState(false)
    useEffect(() => {
        fetch('https://genius-car-mechanics-server-21.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [deleteService])
    const handleRemove = (id) => {
        fetch(`https://genius-car-mechanics-server-21.herokuapp.com/service/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert("Deleted")
                    setDeleteService(true);

                }
            })

    }
    return (
        <div className="mt-3 container">

            <h1>You can manage services from here!</h1>
            <div className="row g-5 mt-3">
                {
                    services.map(service => <div key={service._id} className="col-md-4">
                        <div className="border p-3">
                            <img src={service.img} className="img-fluid" alt="" />
                            <h3>{service.name}</h3>
                            <h6>Price: ${service.price}</h6>
                            <h6>info: {service.description}</h6>
                            <button className="btn btn-danger" onClick={() => handleRemove(service._id)}>Remove</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageService;