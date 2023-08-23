// Write all the code here
import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <footer>

            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 mb-3">
                    <h2>Hamburguesería</h2>
                    <p>Intentamos darte el mejor sabor posible.</p>
                    <br />
                    <em>Prestamos atención a tus comentarios.</em>
                    <strong>Todos los derechos reservados @hamburgueseria</strong>    
                </div>
                <div className="col-12 col-sm-4 text-center mb-3">
                    <h4>Síguenos</h4>
                    <a href="https://youtube.com/xyz">
                        <AiFillYoutube />
                    </a>
                    <a href="https://instagram.com/xyz">
                        <AiFillInstagram />
                    </a>    
                </div>
            </div>


            {/* <div>
                <h2>Hamburguesería</h2>
                <p>Intentamos darte el mejor sabor posible.</p>
                <br />
                <em>Prestamos atención a tus comentarios.</em>
                <strong>Todos los derechos reservados @hamburgueseria</strong>
            </div>
            <aside>
                <h4>Síguenos</h4>
                <a href="https://youtube.com/xyz">
                    <AiFillYoutube />
                </a>
                <a href="https://instagram.com/xyz">
                    <AiFillInstagram />
                </a>
            </aside> */}
        </footer>
    );
};
export default Footer;