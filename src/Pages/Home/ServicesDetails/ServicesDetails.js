import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServicesDetails = () => {
    const servicesAll = useLoaderData();
    const { title, description, img, price, services } = servicesAll;
    const [first] = services;
    const { name, print, details } = first;
    return (
        <div className="card w-full bg-amber-200 shadow-xl">
            <figure>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>

            </figure>
            <div className="card-body items-center text-center">
                <h2 className="text-5xl font-semibold">Service Name: {title}</h2>
                <p className='text-3xl mt-5 bg-red-300'><span className='font-bold'>Description:</span> {description}</p>
                <div className="card-actions">
                    <p className='mt-5 text-3xl bg-fuchsia-300'>Price: {price} bdt</p> <br />
                    <p className='mt-5 text-3xl font-semibold bg-indigo-400'>Service: {name}</p>
                    <p className='mt-5 text-3xl font-semibold bg-yellow-200'>Details: {details}</p>
                    <p className='mt-5 text-3xl font-semibold bg-rose-100'>Print: {print}</p>

                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;