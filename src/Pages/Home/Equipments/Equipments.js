import React, { useEffect, useState } from 'react';


// creating equipments components.
const Equipments = () => {
    const [euips, setEquips] = useState([]);
    useEffect(() => {
        fetch('https://photography-service-server.vercel.app/equipments')
            .then(res => res.json())
            .then(data => {

                setEquips(data)
            })
    }, [])

    return (
        <div className='mt-10 font-bold'>
            < h2 className='text-3xl' > Equipments:</h2 >
            <div className='mt-6 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 bg-indigo-200 gap-5'>

                {
                    euips.map(equip =>
                        <div key={equip._id} className="mt-5 mb-5 ml-5 card w-96 bg-base-100 shadow-xl bg-orange-200">
                            <figure className="px-10 pt-10">
                                <img src={equip.img} alt="" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{equip.title}</h2>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Equipments;