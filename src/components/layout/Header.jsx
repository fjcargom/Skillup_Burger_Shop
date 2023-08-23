
import React,{useState} from "react";
import { IoFastFoodOutline,IoClose,IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";


import DropdownMenu from './DropdownMenu';

const Header = ({ isAuthenticated = false }) => {
    // Controlamos el estado del icono cuando está colapsado
    const [collapsed,setCollapsed] = useState(true);
    
    return (
        <nav className="navbar navbar-expand-md bg-white sticky-top ">
            <div className="container-fluid">
                <div className="navbar-brand">
                    <IoFastFoodOutline />
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  //controlamos el evento click y cambiamos el estado de collapsed
                  onClick={()=> setCollapsed(!collapsed)}
                >
                    {/* Si collapsed es verdadero ponemos el icono Hamburguesa
                    Si collapsed es falso ponemos el icono con el aspa */}
                    {collapsed ? (<IoMenuOutline/>): (<IoClose/>)}    
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-items-end">
                        <li className="navbar-item">
                            <div>
                                <Link to="/">Inicio</Link>
                            </div>
                        </li>
                        <li className="navbar-item">
                            <div>
                                <Link to="/contact">Contacto</Link>
                            </div>
                        </li>
                        <li className="navbar-item">
                            <div>
                                <Link to="/about">Quiénes somos</Link>
                            </div>
                        </li>
                        <li className="navbar-item">
                            <div>
                                <Link to="/cart">
                                    <FiShoppingCart />
                                </Link>         
                            </div>
                        </li>
                        <li className="navbar-item">
                            <DropdownMenu />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Header;