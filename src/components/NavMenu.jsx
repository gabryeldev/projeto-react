import Menu from "./Menu"
import './NavMenu.css'

function NavMenu () {
    return(
        <nav className="nav-menu">
            <Menu texto={"Departamentos"} opcoes={["Higiene Pessoal", "Departamento Segundo"]}/>
            <Menu texto={"Marcas"} opcoes={["Item 1", "Item 2", "Item 3"]}/>
            <ul className="opcoes">
                <li><a href="#">Lançamentos</a></li>
                <li><a href="#">Outlet</a></li>
            </ul>
        </nav>
    )
}

export default NavMenu