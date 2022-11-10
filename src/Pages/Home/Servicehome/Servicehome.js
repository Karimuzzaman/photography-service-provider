import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

// creating service home.
const Servicehome = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://photography-service-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    return (
        <div>
            <h2 className='text-3xl font-bold mt-10'>Our Services: </h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 bg-emerald-400 mt-10 gap-5'>
                {
                    services.map(service =>
                        <div key={service._id} >
                            <div className="card w-96 bg-base-100 shadow-xl mt-6 bg-violet-400 ml-3">
                                <figure>
                                    <PhotoProvider>
                                        <PhotoView src={service.img}>
                                            <img src={service.img} alt="" />
                                        </PhotoView>
                                    </PhotoProvider>

                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Service Name: {service.title}</h2>
                                    <p><span className='font-bold'>Service Description:</span> {service.description.length > 100 ? service.description.slice(0, 100) + '...' : service.description}</p>
                                    <p><span className='font-bold'>Price:</span> {service.price} bdt</p>
                                    <p><span className='font-bold'>Rating:</span> {service.rating}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/services/${service._id}`}><button className="btn btn-primary">View Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

            <div className='grid justify-items-center mt-10'>
                <Link to='/services'><button className="btn btn-active btn-secondary">See All</button></Link>
            </div>
        </div>




    );
};

export default Servicehome;