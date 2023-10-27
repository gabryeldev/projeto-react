import Slider from "react-slick";
import PropTypes from 'prop-types';
import './BannerSlider.css'

function BannerSlider( parametros ){
    const settings = {
        dots: false,
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
        <div className="slider">
            <Slider {...settings} className="container">
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
    urls: PropTypes.array
};

export default BannerSlider