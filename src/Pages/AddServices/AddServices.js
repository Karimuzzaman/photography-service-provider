import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddServices = () => {
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const serviceTitle = form.title.value;
        const servicePicture = form.photoURL.value;
        const serviceRating = form.rating.value;
        const servicePrice = form.price.value;
        const serviceDescription = form.description.value;

        const addService = {
            title: serviceTitle,
            img: servicePicture,
            rating: serviceRating,
            price: servicePrice,
            description: serviceDescription,
            services: [
                {
                    name1: serviceTitle,
                    events1: servicePrice,
                    description1: serviceRating
                },
                {
                    name2: serviceTitle,
                    events2: servicePrice,
                    description2: serviceRating
                }

            ]
        }

        fetch('http://localhost:5000/servicesAll', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    toast("Service Added successfully");
                    form.reset();

                }
            })
            .catch(error => console.error(error));


    }
    return (
        <div>
            <form onSubmit={handleAddService}>
                <div className='mt-5'>
                    <p className='text-3xl text-gray-700 mb-4'>Service Title</p>
                    <input name='title' type="text" placeholder="Title" className="input input-bordered input-primary w-full mb-5" required /> <br />

                    <p className='text-3xl text-gray-700 mb-4'>Service Image</p>
                    <input name='photoURL' type="text" placeholder="Photo URL" className="input input-bordered input-primary w-full mb-5" required /> <br />

                    <p className='text-3xl text-gray-700 mb-4'>Rating</p>
                    <input name='rating' type="text" placeholder="Rating" className="input input-bordered input-primary w-full mb-5" required /> <br />

                    <p className='text-3xl text-gray-700 mb-4'>Price</p>
                    <input name='price' type="text" placeholder="Price" className="input input-bordered input-primary w-full mb-5" required /> <br />

                    <p className='text-3xl text-gray-700 mb-4'>Service Description</p>
                    <textarea name='description' className="textarea textarea-primary mt-6 w-full" placeholder="Service Description" required></textarea>
                    <button className="btn btn-secondary mt-5">Add Service</button>
                    <ToastContainer />
                </div>

            </form>
        </div>
    );
};

export default AddServices;