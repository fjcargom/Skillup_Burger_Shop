// Paquetes necesarios
import React from "react";
import Menu from "./Menu";
import Founder from "./Founder";

const Home = () => {

    return (
        <>
            <section className="home">
                <div>
                    <h1>Hamburguesería</h1>
                    <p>Regálate una sabrosa hamburguesa.</p>
                </div>

                <a href="#menu">Explorar el menú</a>
            </section>
            <Menu />
            <Founder />
        </>
        );
        };
export default Home;


