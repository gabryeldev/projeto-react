import Slider from "react-slick";
import PropTypes from 'prop-types';
import './ProductSlider.css'
import ProductCard from "./ProductCard";

function ProductSlider( parametros ){
    const settings = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows : false,
        autoplay: true,
        autoplaySpeed: 15000,
        responsive: [
            {
              breakpoint: 1035,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: false,
                dots: true
              }
            },
            {
              breakpoint: 830,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
                dots: true
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
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
        ]
    }

    return (
        <div className="product-slider">
            <Slider {...settings} className="container">
                {parametros.products.map((url, index) => {
                    return(
                        <ProductCard key={index} 
                                    className="card"
                                    url={url} 
                                    nome="Camisa Nike Brasil I 2022/23 Torcedor Pro Masculina"
                                    preco="R$ 70,99"/>
                    )
                })}
            </Slider>
        </div>
    )   
}

ProductSlider.propTypes = {
  products: PropTypes.array
};

export default ProductSlider