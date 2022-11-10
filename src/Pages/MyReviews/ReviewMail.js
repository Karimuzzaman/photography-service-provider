import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReviewMail = ({ review, handleDelete }) => {
    const { message, customerPic, customer, serviceName, service, customerMail, _id } = review;
    // console.log(message);
    return (
        <div>
            {

            }

            <div className="overflow-x-auto w-full mt-6">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Review</th>
                            <th>Image</th>
                            <th>Delete</th>
                            <th>Edit</th>
                            <th>Service Name</th>
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
                            <td>
                                <div>
                                    <button className='btn btn-ghost' onClick={() => handleDelete(_id)}>X</button>
                                    <ToastContainer />

                                </div>
                            </td>
                            <td>
                                <div>
                                    <Link to={`/myreview/${_id}`}><button className='btn btn-ghost'>Edit Review</button></Link>

                                </div>
                            </td>
                            <td>
                                <div>
                                    {serviceName}
                                </div>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReviewMail;