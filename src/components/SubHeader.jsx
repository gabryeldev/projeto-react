import './SubHeader.css'

function SubHeader() {
    return (
        <section>
            <div className="menu-bar">
                <ul>
                    <li>
                        <a href="#">Departamentos <i className="fas fa-caret-down"></i></a>
                        <div className="dropdown-menu">
                            <ul>
                            <li><a href="#">Blusas</a></li>
                            <li><a href="#">Shorts</a></li>
                            <li><a href="#">Tênis</a></li>
                            <li><a href="#">Chuteiras</a></li>
                            <li>
                                <a href="#">Mais <i className="fas fa-caret-right"></i></a>
                                
                                <div className="dropdown-menu-1">
                                <ul>
                                    <li><a href="#">Outros</a></li>
                                </ul>
                                </div>
                            </li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#">Marcas <i className="fas fa-caret-down"></i></a>
                        <div className="dropdown-menu">
                            <ul>
                            <li><a href="#">Lost</a></li>
                            <li><a href="#">Oakley</a></li>
                            <li><a href="#">MCD</a></li>
                            <li><a href="#">Nike</a></li>
                            <li>
                                <a href="#">Mais <i className="fas fa-caret-right"></i></a>
                                
                                <div className="dropdown-menu-1">
                                <ul>
                                    <li><a href="#">Outros</a></li>
                                    <li><a href="#">Outros</a></li>
                                    <li><a href="#">Outros</a></li>
                                    <li><a href="#">Outros</a></li>
                                    <li><a href="#">Outros</a></li>
                                    <li><a href="#">Outros</a></li>
                                </ul>
                                </div>
                            </li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#">Lançamentos</a></li>
                    <li><a href="#">Outlet</a></li>
                </ul>
            </div>
        </section>
    )
}

export default SubHeader