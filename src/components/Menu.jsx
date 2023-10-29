
import './Menu.css';
import {motion} from 'framer-motion'
import { useState } from 'react';
import PropTypes from 'prop-types';

const animacaoLista = {
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

const animacaoItemLista = {
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

function Menu( parametros ) {
    const [subMenuAberto, setSubMenuAberto] = useState(false);
    const [displaySubMenu, setDisplaySubMenu] = useState(false);
    
    function cliqueBotao () {
        setSubMenuAberto(!subMenuAberto);
        setDisplaySubMenu(!displaySubMenu);
    }

    const mostrarOcultarMenu = {
        display: displaySubMenu ? "block" : "none",
        padding: 4,
        marginTop: 5
    };

    return (
        <motion.div 
            initial={false}
            animate={subMenuAberto ? 'open' : 'closed'}
            className="menu"
        >
            <motion.div
                className='button'
                whileTap={{ scale: 1.03}}
                onClick={cliqueBotao}
            >
                {parametros.texto}
                <motion.div
                    animate={{
                        rotate: subMenuAberto ? 180 : 0,
                        transition: { duration: 0.2 }
                    }}
                >
                    <svg
                        width="8"
                        height="8"
                        viewBox="0 0 512 336.36"
                    >
                        <path d="M42.47.01 469.5 0C492.96 0 512 19.04 512 42.5c0 11.07-4.23 21.15-11.17 28.72L294.18 320.97c-14.93 18.06-41.7 20.58-59.76 5.65-1.8-1.49-3.46-3.12-4.97-4.83L10.43 70.39C-4.97 52.71-3.1 25.86 14.58 10.47 22.63 3.46 32.57.02 42.47.01z"/>
                    </svg>
                </motion.div>
            </motion.div>
            <motion.ul
                style={mostrarOcultarMenu}
                variants={animacaoLista}
            >
                {parametros.opcoes.map((opcao, index) => {
                    return (
                        <motion.li key={index} variants={animacaoItemLista} style={mostrarOcultarMenu}>{opcao}</motion.li>
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