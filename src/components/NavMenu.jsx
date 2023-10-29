import Menu from "./Menu"
import './NavMenu.css'

const mapMenu = new Map();
mapMenu.set('Departamentos', ['Higiene Pessoal', 'Departamento Segundo']);
mapMenu.set('Marcas', ["Item 1", "Item 2", "Item 3"]);

function NavMenu () {
    return(
        <nav className="nav-menu">
            {Array.from(mapMenu).map(([menu, opcoes], index) => (
                <Menu key={index} texto={menu} opcoes={opcoes} />
            ))}
            <ul className="opcoes">
                <li><a href="#">Lançamentos</a></li>
                <li><a href="#">Outlet</a></li>
            </ul>
        </nav>
    )
}

export default NavMenu