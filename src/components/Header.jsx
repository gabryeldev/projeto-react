import { useState } from 'react'
import './Header.css'

function Header() {
    const [isClicked, setIdClicked] = useState(false);

    function abrirFecharMenu(){
        setIdClicked(!isClicked);
    }

    return (
        <nav className="navbar">
            <a href="#"> <img src="src/assets/img/logo.png" className="Logo" alt="Logo"/></a>
            <div>
                <ul className={isClicked ? 'active' : ''}>
                    <li>
                        <div className="form">
                            <input type="text" placeholder="Buscar produtos"/>
                            <button className="normal"><i className="fa fa-search"></i></button>
                        </div>
                    </li>
                    <li><a className="active" href="#">Insira seu <br/> CEP </a></li>
                    <li><a className="active" href="#">Olá, faça login <br/> ou cadastre-se</a></li>
                    
                    <li className="lg-bag"><a href="#"><i className="fa fa-shopping-bag"></i></a></li>
                    <a className="close" ><i className="far fa-times" onClick={abrirFecharMenu}></i></a>
                </ul>
            </div>
            <div className="mobile">
                <i className="bar fas fa-outdent" onClick={abrirFecharMenu}></i>
                <a className="active" href="#"><i className="fa fa-shopping-bag"></i></a>
            </div>
        </nav>
    )
}

export default Header