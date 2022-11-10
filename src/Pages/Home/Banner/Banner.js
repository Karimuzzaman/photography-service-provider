import React, { useEffect, useState } from 'react';
import BannerSlider from './BannerSlider';

// creating banner component.
const Banner = () => {
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        fetch('https://photography-service-server.vercel.app/banner')
            .then(res => res.json())
            .then(data => {

                setBanners(data)
            })
    }, [])

    return (
        <div className="carousel w-full mt-10">
            {
                banners.map(banner => <BannerSlider
                    key={banner._id}
                    banner={banner}>
                </BannerSlider>)
            }

        </div>
    );
};

export default Banner;