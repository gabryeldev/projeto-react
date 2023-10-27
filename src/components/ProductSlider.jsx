import Slider from "react-slick";
import PropTypes from 'prop-types';
import './ProductSlider.css'
import ProductCard from "./ProductCard";

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
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
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

    return (
        <div className="product-slider">
            <Slider {...settings} className="container">
                {parametros.products.map((url, index) => {
                    return(
                        <ProductCard key={index} 
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