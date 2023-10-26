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
                
                <div>
                    <ul className={isClicked ? 'active' : ''}>
                        <li>
                            <div className="search-box">
                                <input type="text" placeholder="Search anything" className="search-input"/>
                                <svg 
                                    width="35px" 
                                    height="35px"
                                    viewBox="0 0 24 24"
                                    className='search-btn'
                                >
                                    <path d="M10.77 18.3C9.2807 18.3 7.82485 17.8584 6.58655 17.031C5.34825 16.2036 4.38311 15.0275 3.81318 13.6516C3.24325 12.2757 3.09413 10.7616 3.38468 9.30096C3.67523 7.84029 4.39239 6.49857 5.44548 5.44548C6.49857 4.39239 7.84029 3.67523 9.30096 3.38468C10.7616 3.09413 12.2757 3.24325 13.6516 3.81318C15.0275 4.38311 16.2036 5.34825 17.031 6.58655C17.8584 7.82485 18.3 9.2807 18.3 10.77C18.3 11.7588 18.1052 12.738 17.7268 13.6516C17.3484 14.5652 16.7937 15.3953 16.0945 16.0945C15.3953 16.7937 14.5652 17.3484 13.6516 17.7268C12.738 18.1052 11.7588 18.3 10.77 18.3ZM10.77 4.74999C9.58331 4.74999 8.42327 5.10189 7.43657 5.76118C6.44988 6.42046 5.68084 7.35754 5.22672 8.45389C4.77259 9.55025 4.65377 10.7566 4.88528 11.9205C5.11679 13.0844 5.68824 14.1535 6.52735 14.9926C7.36647 15.8317 8.43556 16.4032 9.59945 16.6347C10.7633 16.8662 11.9697 16.7474 13.0661 16.2933C14.1624 15.8391 15.0995 15.0701 15.7588 14.0834C16.4181 13.0967 16.77 11.9367 16.77 10.75C16.77 9.15869 16.1379 7.63257 15.0126 6.50735C13.8874 5.38213 12.3613 4.74999 10.77 4.74999Z" fill="#000000"/>
                                    <path d="M20 20.75C19.9015 20.7504 19.8038 20.7312 19.7128 20.6934C19.6218 20.6557 19.5392 20.6001 19.47 20.53L15.34 16.4C15.2075 16.2578 15.1354 16.0697 15.1388 15.8754C15.1422 15.6811 15.221 15.4958 15.3584 15.3583C15.4958 15.2209 15.6812 15.1422 15.8755 15.1388C16.0698 15.1354 16.2578 15.2075 16.4 15.34L20.53 19.47C20.6704 19.6106 20.7493 19.8012 20.7493 20C20.7493 20.1987 20.6704 20.3893 20.53 20.53C20.4608 20.6001 20.3782 20.6557 20.2872 20.6934C20.1962 20.7312 20.0985 20.7504 20 20.75Z" fill="#000000"/>
                                </svg>
                            </div>
                        </li>
                        <li><a className="active" href="#">Insira seu <br/> CEP </a></li>
                        <li><a className="active" href="#">Olá, faça login <br/> ou cadastre-se</a></li>
                        <a className="close" ><i className="far fa-times" onClick={abrirFecharMenu}></i></a>
                    </ul>
                </div>
                <div className='cart-wrapper'>
                        <div className="cart" onClick={adicionarAoCarrinho}>
                            <ion-icon className="ion-icon" name="cart-outline"></ion-icon>
                        </div>
                        <div className={cartCount > 0 ? "cart-badge ion-icon" : "none"}><span id="cart-count">{cartCount}</span></div>
                </div>
                <div className="mobile">
                    <i className="bar fas fa-outdent" onClick={abrirFecharMenu}></i>
                </div>
            </div>
        </nav>
    )
}

export default Header