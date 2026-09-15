import React from 'react'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};
function Hero() {
    return (
        <div>
            <div>
    <Slider {...settings}>
            <div>
                <h3>1</h3>
            </div>

            <div>
                <h3>2</h3>
            </div>

            <div>
                <h3>3</h3>
            </div>

            <div>
                <h3>4</h3>
            </div>
        </Slider>
            </div>
        </div>
    )
}

export default Hero
