import './DestaqueCard.css'
import PropTypes from 'prop-types';
import {motion} from 'framer-motion'
import { useState, useEffect } from 'react'

function DestaqueCard( parametros ){
    const [positionText, setPositionText] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
          setPositionText((prevPosition) => (prevPosition === 0 ? -300 : 0));
        }, 2000); 
    
        return () => clearInterval(interval);
    });
    
    return(
        <div className='card-destaque'
        >
            <motion.img whileHover={{ scale: 1.13}}  src={parametros.url}/>
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

DestaqueCard.propTypes = {
    url: PropTypes.string
};

export default DestaqueCard