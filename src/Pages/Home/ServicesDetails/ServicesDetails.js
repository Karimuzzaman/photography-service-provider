import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServicesDetails = () => {
    const servicesAll = useLoaderData();
    const { title, description, img, price, services } = servicesAll;
    const [first, second] = services;
    const { name1, events1, description1 } = first;
    const { name2, events2, description2 } = second;
    return (
        <div className="card w-full bg-amber-200 shadow-xl mt-10">
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
                    <p className='mt-5 text-3xl font-semibold bg-indigo-400'>{name1}</p> <br />
                    <p className='mt-5 text-3xl font-semibold bg-rose-100'>{events1}</p> <br />
                    <p className='mt-5 text-3xl font-semibold bg-yellow-200'>Details: {description1}</p> <br />
                    <p className='mt-5 text-3xl font-semibold bg-indigo-400'>{name2}</p> <br />
                    <p className='mt-5 text-3xl font-semibold bg-rose-100'>{events2}</p> <br />
                    <p className='mt-5 text-3xl font-semibold bg-yellow-200'>Details: {description2}</p> <br />


                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;