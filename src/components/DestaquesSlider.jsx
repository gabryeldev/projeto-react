import './DestaquesSlider.css'
import Slider from "react-slick";
import PropTypes from 'prop-types';
import DestaqueCard from './DestaqueCard';

function DestaquesSlider( parametros ){
    const settings = {
        touchMove: false,
        centerMode: true,
        centerPadding: '0px',
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows : false,
        responsive: [
            {
              breakpoint: 1170,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
                dots: false
              }
            },
            {
              breakpoint: 830,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
                dots: false
              }
            },
            {
              breakpoint: 624,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
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
    
    return(
        <div className="destaques-slider">
            <Slider {...settings} className="container">
                {parametros.urls.map((url, index) => {
                    return(
                        <DestaqueCard key={index} 
                                    className="card"
                                    url={url}/>
                    )
                })}
            </Slider>
        </div>
    )
}

DestaquesSlider.propTypes = {
    urls: PropTypes.array
};

export default DestaquesSlider