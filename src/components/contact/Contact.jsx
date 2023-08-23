import React from "react";
import { motion } from "framer-motion";
import burger from "../../assets/burger2.png";
import Popup from 'reactjs-popup';

const Contact = () => {
    return (
        <section className="contact">
            <form action="">
                <h2>Contáctanos</h2>
                <input type="text" placeholder="Nombre" />
                <input type="email" placeholder="Correo electrónico" />
                <textarea placeholder="Tu mensaje..." cols="30" rows="5"></textarea>
                <Popup trigger={
                    <button type="button">Enviar</button>
                }
                >
                    <div style={
                      {color:"red",
                      transform: 'translate(25%,-700%)',
                      backgroundColor: '#fff',
                      padding: '10px',
                      borderRadius: '5px',
                      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}
                      }>¡Gracias por contactarnos! En breve te responderemos.
                    </div>
                </Popup>
            </form>
            
            <div className="formBorder">

            </div>
            
            <img src={burger} alt="Hamburguesa" />
            
        </section>
    );
};
export default Contact;