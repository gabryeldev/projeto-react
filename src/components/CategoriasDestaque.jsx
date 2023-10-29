import './CategoriasDestaque.css'
import PropTypes from 'prop-types';
import CardCategoria from './CardCategoria';

function CategoriasDestaque( parametros ){
    const interval = 3500;

    return (
        <div className='categoria-container'>
            <div className='categoria-destaque'>
                {parametros.urls.map((url, index) => {
                    return (
                        <CardCategoria className="card-destaque" key={index} url={url} intervalo={interval}/>
                    );
                })}
            </div>
        </div>
    )
}

CategoriasDestaque.propTypes = {
    urls: PropTypes.array
};


export default CategoriasDestaque