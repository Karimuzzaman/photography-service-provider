import React from 'react';

// creating service review.
const ServicesReview = ({ review }) => {
    const { message, customerPic, customer, serviceName, service, customerMail } = review;


    return (
        <div className="overflow-x-auto w-full mt-6">
            <table className="table w-full">

                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Review</th>
                        <th>Image</th>

                    </tr>
                </thead>
                <tbody>

                    <tr>

                        <td>
                            <div>
                                <div className="font-bold">{customer}</div>

                            </div>

                        </td>
                        <td>
                            <div>
                                {message}
                            </div>
                        </td>
                        <td>
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={customerPic} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ServicesReview;