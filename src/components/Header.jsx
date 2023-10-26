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
            <a href="#"> <img src="/img/logo.png" className="Logo" alt="Logo"/></a>
            <div className='container'>
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
                <div>
                    <ul className={isClicked ? 'active' : ''}>
                        <li>
                            
                        </li>
                        <li><a className="active" href="#">Insira seu <br/> CEP </a></li>
                        <li><a className="active" href="#">Olá, faça login <br/> ou cadastre-se</a></li>
                        <a className="close" ><i className="far fa-times" onClick={abrirFecharMenu}></i></a>
                    </ul>
                </div>
                
                <div className='cart-wrapper'>
                        <div className="cart" onClick={adicionarAoCarrinho}>
                        <svg 
                            width="35px" 
                            height="35px"
                            viewBox="0 -0.5 25 25"
                        >
                            <path 
                                d="M12.5555 5.75C12.9697 5.74889 13.3046 5.41221 13.3035 4.998C13.3024 4.58379 12.9657 4.2489 12.5515 4.25L12.5555 5.75ZM9.56153 8H10.3115V8L9.56153 8ZM8.81153 8.054C8.81153 8.46821 9.14732 8.804 9.56153 8.804C9.97575 8.804 10.3115 8.46821 10.3115 8.054H8.81153ZM8.81153 9C8.81153 9.41421 9.14732 9.75 9.56153 9.75C9.97575 9.75 10.3115 9.41421 10.3115 9H8.81153ZM10.3115 8.054C10.3115 7.63979 9.97575 7.304 9.56153 7.304C9.14732 7.304 8.81153 7.63979 8.81153 8.054H10.3115ZM9.4717 7.3094C9.06047 7.35901 8.76732 7.7326 8.81693 8.14383C8.86654 8.55506 9.24013 8.84821 9.65136 8.7986L9.4717 7.3094ZM10.5615 8L10.5524 8.75H10.5615V8ZM14.4475 8V8.75006L14.4567 8.74994L14.4475 8ZM15.3577 8.7986C15.7689 8.84821 16.1425 8.55506 16.1921 8.14383C16.2417 7.7326 15.9486 7.35901 15.5374 7.3094L15.3577 8.7986ZM9.66405 8.79737C10.0746 8.74241 10.3629 8.36503 10.3079 7.95448C10.2529 7.54393 9.87557 7.25567 9.46501 7.31063L9.66405 8.79737ZM6.56953 12L5.8485 11.7936C5.84617 11.8017 5.84398 11.8099 5.84193 11.8181L6.56953 12ZM5.56953 16L4.84193 15.8181C4.83708 15.8375 4.83302 15.857 4.82974 15.8767L5.56953 16ZM19.4335 16L20.1734 15.8772C20.1701 15.8573 20.166 15.8376 20.1611 15.8181L19.4335 16ZM18.4335 12L19.1611 11.8181C19.1592 11.8102 19.157 11.8023 19.1548 11.7944L18.4335 12ZM15.5417 7.31072C15.1312 7.25538 14.7536 7.54329 14.6983 7.95379C14.6429 8.36429 14.9308 8.74193 15.3413 8.79727L15.5417 7.31072ZM10.3115 11.62C10.3115 11.2058 9.97575 10.87 9.56153 10.87C9.14732 10.87 8.81153 11.2058 8.81153 11.62H10.3115ZM8.81153 12.5C8.81153 12.9142 9.14732 13.25 9.56153 13.25C9.97575 13.25 10.3115 12.9142 10.3115 12.5H8.81153ZM12.4555 4.25C12.0413 4.2489 11.7046 4.58379 11.7035 4.998C11.7024 5.41221 12.0373 5.74889 12.4515 5.75L12.4555 4.25ZM15.4455 8L14.6955 8V8H15.4455ZM14.6955 8.054C14.6955 8.46821 15.0313 8.804 15.4455 8.804C15.8597 8.804 16.1955 8.46821 16.1955 8.054H14.6955ZM16.1955 8.054C16.1955 7.63979 15.8597 7.304 15.4455 7.304C15.0313 7.304 14.6955 7.63979 14.6955 8.054H16.1955ZM14.6955 9C14.6955 9.41421 15.0313 9.75 15.4455 9.75C15.8597 9.75 16.1955 9.41421 16.1955 9H14.6955ZM16.1955 11.621C16.1955 11.2068 15.8597 10.871 15.4455 10.871C15.0313 10.871 14.6955 11.2068 14.6955 11.621H16.1955ZM14.6955 12.5C14.6955 12.9142 15.0313 13.25 15.4455 13.25C15.8597 13.25 16.1955 12.9142 16.1955 12.5H14.6955ZM12.5515 4.25C10.4844 4.25552 8.81153 5.93283 8.81153 8L10.3115 8C10.3115 6.7597 11.3152 5.7533 12.5555 5.75L12.5515 4.25ZM8.81153 8V8.054H10.3115V8H8.81153ZM10.3115 9V8.054H8.81153V9H10.3115ZM9.65136 8.7986C9.95031 8.76253 10.2513 8.74628 10.5524 8.74994L10.5707 7.25006C10.2034 7.24559 9.83631 7.26541 9.4717 7.3094L9.65136 8.7986ZM10.5615 8.75H14.4475V7.25H10.5615V8.75ZM14.4567 8.74994C14.7578 8.74628 15.0588 8.76253 15.3577 8.7986L15.5374 7.3094C15.1728 7.26541 14.8056 7.24559 14.4384 7.25006L14.4567 8.74994ZM9.46501 7.31063C8.56843 7.43066 7.83317 7.76822 7.23065 8.55165C6.67688 9.27168 6.2672 10.3311 5.8485 11.7936L7.29056 12.2064C7.70587 10.7559 8.05419 9.94132 8.41967 9.4661C8.7364 9.05428 9.08164 8.87534 9.66405 8.79737L9.46501 7.31063ZM5.84193 11.8181L4.84193 15.8181L6.29714 16.1819L7.29714 12.1819L5.84193 11.8181ZM4.82974 15.8767C4.54151 17.6061 5.0564 18.8935 6.08303 19.7116C7.05266 20.4842 8.36935 20.75 9.55853 20.75V19.25C8.54472 19.25 7.6169 19.0158 7.01779 18.5384C6.47566 18.1065 6.09755 17.3939 6.30933 16.1233L4.82974 15.8767ZM9.55853 20.75H12.5535V19.25H9.55853V20.75ZM12.5535 20.75H15.4445V19.25H12.5535V20.75ZM15.4445 20.75C16.6324 20.75 17.9485 20.4841 18.9181 19.7116C19.9446 18.8938 20.4605 17.6067 20.1734 15.8772L18.6937 16.1228C18.9046 17.3933 18.526 18.1062 17.9834 18.5384C17.3841 19.0159 16.4566 19.25 15.4445 19.25V20.75ZM20.1611 15.8181L19.1611 11.8181L17.7059 12.1819L18.7059 16.1819L20.1611 15.8181ZM19.1548 11.7944C18.7379 10.3319 18.3283 9.27255 17.7742 8.55232C17.1718 7.76922 16.4367 7.43138 15.5417 7.31072L15.3413 8.79727C15.9224 8.87562 16.2683 9.05478 16.5853 9.46693C16.9508 9.94195 17.2991 10.7561 17.7123 12.2056L19.1548 11.7944ZM8.81153 11.62V12.5H10.3115V11.62H8.81153ZM12.4515 5.75C13.6918 5.7533 14.6955 6.7597 14.6955 8L16.1955 8C16.1955 5.93283 14.5227 4.25552 12.4555 4.25L12.4515 5.75ZM14.6955 8V8.054H16.1955V8H14.6955ZM14.6955 8.054V9H16.1955V8.054H14.6955ZM14.6955 11.621V12.5H16.1955V11.621H14.6955Z"
                            />
                        </svg>
                        </div>
                        <div 
                            
                            className={cartCount > 0 ? "cart-badge ion-icon" : "none"}
                        >
                            <span 
                                id="cart-count"
                            >
                                {cartCount}
                            </span>
                        </div>
                </div>
                <div className="mobile">
                    <i className="bar fas fa-outdent" onClick={abrirFecharMenu}></i>
                </div>
            </div>
        </nav>
    )
}

export default Header