import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewMail from './ReviewMail';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    console.log(reviews);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?customerMail=${user?.email}`)
            .then(res => res.json())
            .then(data => {

                setReviews(data);
            })

    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
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
            {
                reviews.map(review => <ReviewMail
                    key={review._id}
                    review={review}
                    handleDelete={handleDelete}
                >
                </ReviewMail>)
            }
            {
                !reviews.length && <p className='text-9xl text-red-500 text-center my-[50%]'>No Reviews were added.</p>
            }
        </div>
    );
};

export default MyReviews;