import React, { useEffect, useState } from 'react';

const About = () => {
    const [abouts, setAbouts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/about')
            .then(res => res.json())
            .then(data => {

                setAbouts(data)
            })
    }, [])
    return (
        <div className='mt-10 font-bold'>
            < h2 className='text-3xl' > About Us:</h2 >
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-6 gap-5 bg-fuchsia-400'>
                {
                    abouts.map(about =>
                        <div key={about._id} className="mt-5 ml-5 card w-96 bg-base-100 shadow-xl mb-6 bg-pink-300">
                            <figure className="px-10 pt-10">
                                <img src={about.img} alt="" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{about.title}</h2>

                                <div className="card-actions">

                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default About;