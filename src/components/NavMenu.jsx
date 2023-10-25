import Menu from "./Menu"
import './NavMenu.css'

function NavMenu () {
    return(
        <nav className="nav-menu">
            <Menu texto={"Departamentos"} opcoes={["Item 1", "Item 2"]}/>
            <Menu texto={"Marcas"} opcoes={["Item 1", "Item 2", "Item 3"]}/>
            <ul>
                <li><a href="#">Lançamentos</a></li>
                <li><a href="#">Outlet</a></li>
            </ul>
        </nav>
    )
}

export default NavMenu