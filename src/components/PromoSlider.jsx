import Slider from "react-slick";
import PropTypes from 'prop-types';
import './PromoSlider.css'

function BannerSlider( parametros ){
    const settings = {
        dots: false,
        dotsClass: 'none',
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows : false,
        fade: true
    }

    return (
        <div className="slider-promo">
            <Slider {...settings} className="container-promo">
                {parametros.slides.map((url, index) => {
                    return(
                        <img key={index} src={url} alt="" />
                    )
                })}
            </Slider>
        </div>
    ) 
}

BannerSlider.propTypes = {
    slides: PropTypes.array
};

export default BannerSlider