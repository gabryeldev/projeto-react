
import './ProductCard.css'
import PropTypes from 'prop-types';

function ProductCard( parametros ){
    return(
        <div className="product-card">
            <div className="imagem">
                <img src={parametros.url} alt="" />
            </div>
            <div className="product-info">
                <div className="stars">
                    <svg 
                        aria-hidden="true"
                        fill="currentColor" 
                        viewBox="0 0 22 20"
                        width={20}
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg 
                        aria-hidden="true"
                        fill="currentColor" 
                        viewBox="0 0 22 20"
                        width={20}
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg 
                        aria-hidden="true"
                        fill="currentColor" 
                        viewBox="0 0 22 20"
                        width={20}
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg 
                        aria-hidden="true"
                        fill="currentColor" 
                        viewBox="0 0 22 20"
                        width={20}
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg 
                        aria-hidden="true" 
                        fill="currentColor" 
                        viewBox="0 0 22 20"
                        width={20}
                    >
                        <path d="M11.707.707A1 1 0 0 0 11 .414a1.6 1.6 0 0 0-1.409.816l-2.525 4.6-5.687.744A1.576 1.576 0 0 0 .065 7.667a1.485 1.485 0 0 0 .456 1.566l4.05 3.552-.95 4.988a1.5 1.5 0 0 0 .567 1.473 1.624 1.624 0 0 0 1.703.18l5.194-2.457a1 1 0 0 0 .915-1V1.414a1 1 0 0 0-.293-.707Z"/>
                    </svg>
                    
                </div>
                <span className='nome'>{parametros.nome}</span>
                <span className='preco'>{parametros.preco}</span>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    url: PropTypes.string,
    nome: PropTypes.string,
    preco: PropTypes.string
};

export default ProductCard