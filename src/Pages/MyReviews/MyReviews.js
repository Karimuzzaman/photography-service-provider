import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewMail from './ReviewMail';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

// creating my reviews.
const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    console.log(reviews);

    useEffect(() => {
        fetch(`https://photography-service-server.vercel.app/reviews?customerMail=${user?.email}`)
            .then(res => res.json())
            .then(data => {

                setReviews(data);
            })

    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review');
        if (proceed) {
            fetch(`https://photography-service-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(
                    res => res.json())
                .then(data => {


                    if (data.deletedCount > 0) {
                        toast("Review Deleted successfully");
                        const remaining = reviews.filter(odr => odr._id !== id);
                        setReviews(remaining);

                    }


                })
        }
    }
    return (
        <div>
            <Helmet>
                <title>Reviews</title>
            </Helmet>
            {
                reviews.map(review => <ReviewMail
                    key={review._id}
                    review={review}
                    handleDelete={handleDelete}
                >
                </ReviewMail>)
            }
            {
                !reviews.length && <p className='text-9xl text-red-500 text-center my-[20%]'>No Reviews were added.</p>
            }
        </div>
    );
};

export default MyReviews;