import React from 'react';


// creating bannerslider.
const BannerSlider = ({ banner }) => {
    const { img, next, prev, img_id } = banner;
    return (
        <div id={`slide${img_id}`} className="carousel-item relative w-full">
            <img src={img} alt='' className="w-full rounded-xl" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>

    );
};

export default BannerSlider;