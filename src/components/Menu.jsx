
import './Menu.css';
import {motion} from 'framer-motion'
import { useState } from 'react';
import PropTypes from 'prop-types';

const listVariants = {
    open: {
        clipPath: "inset(0% 0% 0% round 10px)",
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.7,
            delayChildren: 0.3,
            staggerChildren: 0.05
        }
    },
    closed: {
        clipPath: "inset(10% 50% 90% 50% round 10px)",
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.3
        }
    }
}

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 24
        }
    },
    closed: {
        opacity: 0,
        y: 20,
        transition: {
            duration: 0.2
        }
    }
}

function Menu( props ) {
    const [isOpen, setIsOpen] = useState(false);
    const [displayList, setDisplayList] = useState(false);
    
    function cliqueBotao () {
        setIsOpen(!isOpen)
        setDisplayList(!displayList)
    }

    const searchIconStyle = {
        display: displayList ? "block" : "none"
    };

    return (
        <motion.div 
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            className="menu"
        >
            <motion.div
                className='button'
                whileTap={{ scale: 1.03}}
                onClick={cliqueBotao}
            >
                {props.texto}
                <motion.div
                    animate={{
                        rotate: isOpen ? 180 : 0,
                        transition: { duration: 0.2 }
                    }}
                >
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 512 336.36"
                    >  
                        <path d="M42.47.01 469.5 0C492.96 0 512 19.04 512 42.5c0 11.07-4.23 21.15-11.17 28.72L294.18 320.97c-14.93 18.06-41.7 20.58-59.76 5.65-1.8-1.49-3.46-3.12-4.97-4.83L10.43 70.39C-4.97 52.71-3.1 25.86 14.58 10.47 22.63 3.46 32.57.02 42.47.01z"/>
                    </svg>
                </motion.div>
            </motion.div>
            <motion.ul
                style={searchIconStyle}
                variants={listVariants}

            >
                {props.opcoes.map((opcao, index) => {
                    return (
                        <motion.li key={index} variants={itemVariants} style={searchIconStyle}>{opcao}</motion.li>
                    );
                })}
            </motion.ul>
        </motion.div>
    )
}

Menu.propTypes = {
    texto: PropTypes.string,
    opcoes: PropTypes.array
};

export default Menu