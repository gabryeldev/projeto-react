import { useState } from 'react'
import './Header.css'

function Header() {
    const [isClicked, setIdClicked] = useState(false);
    const [cartCount, setCartCount] = useState(0);

    function abrirFecharMenu(){
        setIdClicked(!isClicked);
    }

    function adicionarAoCarrinho(){
        setCartCount(cartCount+1);
    }

    return (
        <nav className="navbar">
            <a href="#"> <img src="src/assets/img/logo.png" className="Logo" alt="Logo"/></a>
            <div className='container'>
                <div className='cart-wrapper'>
                        <div className="cart" onClick={adicionarAoCarrinho}>
                            <ion-icon className="ion-icon" name="cart-outline"></ion-icon>
                        </div>
                        <div className={cartCount > 0 ? "cart-badge ion-icon" : "none"}><span id="cart-count">{cartCount}</span></div>
                </div>
                <div>
                    <ul className={isClicked ? 'active' : ''}>
                        <li>
                            <div className="search-box">
                                <input type="text" placeholder="Search anything" className="search-input"/>
                                <i className="fas fa-search search-btn"></i>
                            </div>
                        </li>
                        <li><a className="active" href="#">Insira seu <br/> CEP </a></li>
                        <li><a className="active" href="#">Olá, faça login <br/> ou cadastre-se</a></li>
                        <a className="close" ><i className="far fa-times" onClick={abrirFecharMenu}></i></a>
                    </ul>
                </div>
                <div className="mobile">
                    <i className="bar fas fa-outdent" onClick={abrirFecharMenu}></i>
                </div>
            </div>
        </nav>
    )
}

export default Header