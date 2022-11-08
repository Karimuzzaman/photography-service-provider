import React, { useEffect, useState } from 'react';

const ServicesAll = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/servicesAll')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);
            })
    }, [])
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-6 bg-purple-300 gap-5'>
            {
                services.map(service =>
                    <div key={service._id} className="card w-96 bg-base-100 shadow-xl mb-5 bg-rose-200">
                        <figure className="px-10 pt-10">
                            <img src={service.img} alt="" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Service Name: {service.title}</h2>
                            <p><span className='font-bold'>Service Description:</span> {service.description.length > 100 ? service.description.slice(0, 100) + '...' : service.description}</p>
                            <p><span className='font-bold'>Price:</span> {service.price} bdt</p>
                            <p><span className='font-bold'>Rating:</span> {service.rating}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default ServicesAll;