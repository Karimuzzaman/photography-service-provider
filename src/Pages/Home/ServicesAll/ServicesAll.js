import React, { useContext, useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

// creating service all.
const ServicesAll = () => {
    const { loading } = useContext(AuthContext);


    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/servicesAll')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, []);

    if (loading) {
        return <h1 className='text-5xl'><div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div></h1>
    }
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-6 bg-purple-300 gap-5'>
            {
                services.map(service =>
                    <div key={service._id} className="mt-5 card w-96 bg-base-100 shadow-xl mb-5 bg-rose-200 ml-3">
                        <figure className="px-10 pt-10">
                            <PhotoProvider>
                                <PhotoView src={service.img}>
                                    <img src={service.img} alt="" className="rounded-xl" />
                                </PhotoView>
                            </PhotoProvider>

                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Service Name: {service.title}</h2>
                            <p><span className='font-bold'>Service Description:</span> {service.description.length > 100 ? service.description.slice(0, 100) + '...' : service.description}</p>
                            <p><span className='font-bold'>Price:</span> {service.price} bdt</p>
                            <p><span className='font-bold'>Rating:</span> {service.rating}</p>
                            <div className="card-actions">
                                <Link to={`/services/${service._id}`}><button className="btn btn-primary">View Details</button></Link>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default ServicesAll;