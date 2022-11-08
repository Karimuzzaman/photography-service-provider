import React, { useEffect, useState } from 'react';
import BannerSlider from './BannerSlider';

const Banner = () => {
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/banner')
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