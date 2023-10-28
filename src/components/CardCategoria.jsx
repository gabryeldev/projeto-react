import './CardCategoria.css'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import {motion} from 'framer-motion'

function CardCategoria( parametros ){
    const [positionText, setPositionText] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
          setPositionText((prevPosition) => (prevPosition === 0 ? -300 : 0));
        }, parametros.intervalo); 
    
        return () => clearInterval(interval);
    });

    return(
        <div className='card-categoria'
        >
            <motion.img whileHover={{ scale: 1.13}} src={parametros.url}/>
            <motion.a 
                initial={{ x: 0 }}
                animate={{ x: positionText }}
                transition={{ type: 'spring', stiffness: 70, damping: 9, duration: 2}}
                href=""
            >
                Casual
            </motion.a>
        </div>
    )
}

CardCategoria.propTypes = {
    url: PropTypes.string,
    intervalo: PropTypes.number
};

export default CardCategoria