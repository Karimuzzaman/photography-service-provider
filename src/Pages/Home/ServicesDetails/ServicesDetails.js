import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ServicesReview from './ServicesReview';
import { Helmet } from "react-helmet";


// creating service details.
const ServicesDetails = () => {
    const servicesAll = useLoaderData();
    const { title, description, img, price, services, _id } = servicesAll;
    const [first, second] = services;
    const { name1, events1, description1 } = first;
    const { name2, events2, description2 } = second;
    const { user, loading } = useContext(AuthContext);


    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://photography-service-server.vercel.app/reviews?service=${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);

            })

    }, [_id])

    if (loading) {
        return <h1 className='text-5xl'><div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div></h1>
    }

    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            price,
            customer: user?.displayName,
            customerMail: user?.email,
            customerPic: user?.photoURL,
            message
        };

        fetch('https://photography-service-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    alert('Reviews Added successfully')
                    form.reset();

                }
            })
            .catch(error => console.error(error));




    }
    return (
        <div>
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

            {/* Reviews */}
            <div className='mt-6'>
                <h2 className='mt-5 text-4xl text-fuchsia-600'>Customet Reviews of {title} services: </h2>
                {
                    reviews.map(review =>
                        <ServicesReview
                            key={review._id}
                            review={review}>

                        </ServicesReview>)
                }

            </div>

            {/* Post Review */}
            <div>
                <h2 className='mt-5 text-4xl '>Post Your Review:</h2>
                {
                    user?.uid &&


                    <form onSubmit={handleAddReview}>
                        <textarea name='message' className="textarea textarea-primary mt-6 w-full" placeholder="Your Review" required></textarea>
                        <button className="btn btn-secondary mt-5">Add Review</button>
                    </form>
                }
            </div>
            <div>
                {
                    !user?.uid &&

                    <p className=' text-4xl text-amber-700'>Please login to add a review. <Link className='font-bold text-red-800' to='/login'>Login</Link></p>
                }
            </div>
            <Helmet>
                <title>Service-Details-{_id}</title>
            </Helmet>
        </div>
    );
};

export default ServicesDetails;