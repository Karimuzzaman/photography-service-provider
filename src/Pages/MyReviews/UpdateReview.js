import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from "react-helmet";

// creating update review.
const UpdateReview = () => {
    const storedReview = useLoaderData();
    const [review, setReview] = useState(storedReview);
    console.log(storedReview);

    const handleUpdateUser = event => {
        event.preventDefault();
        console.log(review)
        fetch(`https://photography-service-server.vercel.app/reviews/${storedReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Review updated');
                    console.log(data);

                }

            })
    }




    const handleInputChange = event => {
        const value = event.target.value;
        const field = event.target.name;
        console.log(value, field);
        const newReview = { ...review };
        newReview[field] = value;
        setReview(newReview);
    }
    return (
        <div>
            <Helmet>
                <title>Update-Review</title>
            </Helmet>
            <h2 className='mt-6 text-5xl text-yellow-400 mb-5'>Please update: {storedReview.name}</h2>

            <form onSubmit={handleUpdateUser}>

                <p className='text-3xl text-gray-700 mb-4'>User Name</p>
                <input onChange={handleInputChange} type="text" name='customer' placeholder='customer' defaultValue={storedReview.customer} className="input input-bordered input-primary w-full mb-5" readOnly /> <br />

                <p className='text-3xl text-gray-700 mb-4'>Update Your Review</p>
                <textarea onChange={handleInputChange} type="text" name='message' placeholder='message' defaultValue={storedReview.message} className="textarea textarea-primary mt-6 w-full" required></textarea>
                <br />

                <p className='text-3xl text-gray-700 mb-4'>Service Name</p>
                <input onChange={handleInputChange} type="text" name='serviceName' placeholder='serviceName' defaultValue={storedReview.serviceName} readOnly className="input input-bordered input-primary w-full mb-5" /> <br />

                <button className="btn btn-secondary mt-5" type="submit">Update Review</button>
            </form>
        </div>
    );
};

export default UpdateReview;