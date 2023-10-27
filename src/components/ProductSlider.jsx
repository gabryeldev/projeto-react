import Slider from "react-slick";
import PropTypes from 'prop-types';
import './ProductSlider.css'

function ProductSlider( parametros ){
    const settings = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows : false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    }

    return (
        <div className="product-slider">
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

ProductSlider.propTypes = {
    urls: PropTypes.array
};

export default ProductSlider