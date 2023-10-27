import Slider from "react-slick";
import './BannerSlider.css'

function BannerSlider( ){
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : false,
    }

    return (
        <div>
            <h2> Single Item</h2>
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
                <div>
                <h3>5</h3>
                </div>
                <div>
                <h3>6</h3>
                </div>
                <div>
                <h3>7</h3>
                </div>
                <div>
                <h3>8</h3>
                </div>
                <div>
                <h3>9</h3>
                </div>
                <div>
                <h3>10</h3>
                </div>
                <div>
                <h3>11</h3>
                </div>
                <div>
                <h3>12</h3>
                </div>
                <div>
                <h3>13</h3>
                </div>
            </Slider>
        </div>
    )
    
}

export default BannerSlider