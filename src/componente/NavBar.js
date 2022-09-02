import logo1 from "../imagenes/logo1.png"
import { CartWidget } from "./CartWidget/Cartwidget";



const NavBar = () => {
    return (
        <div className="navbar-contenedor">
            <img src={logo1} className="logo-contenedor" alt="logo kabuki" />
            <ul>
                <li>Inicio</li>
                <li>¿Quienes somos?</li>
                <li>Smartwatch</li>
                <li>Contacto</li>
                <CartWidget />
            </ul>
        </div>

    )
    
}


export default NavBar;