import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})
    useEffect(() => {
        fetch(`https://genius-car-mechanics-server-21.herokuapp.com/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className="mt-3">
            <h1>Service Name is: {service.name}</h1>
            <h3 className="w-50 mx-auto">Details info: {service.description}</h3>
            <h3>Price: {service.price}</h3>
            <img src={service.img} alt="" />
        </div>
    );
};

export default Booking;