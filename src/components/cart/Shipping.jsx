import React from "react";
import { Country, State } from "country-state-city";
import Popup from 'reactjs-popup';

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Información de Envío</h1>
        <form>
          <div>
            <label>Calle y número</label>
            <input type="text" placeholder="Introduzca C/ y Nº" />
          </div>
          <div>
            <label>Ciudad</label>
            <input type="text" placeholder="Introduzca ciudad" />
          </div>
          <div>
              {/* Compelte the code for the COUNTRY DROPDOWN*/}
            <label>País</label>
            <select>
              <option value="">País</option>
              {Country && Country.getAllCountries().map((country) => ( 
                    <option 
                      value={country.name} 
                      key={country.isoCode}
                    > 
                      {country.name}
                    </option>
                    ))
              }                
            </select>
          </div>
          <div>
            <label>Estado / Provincia</label>
            <select>
            <option value="">Provincia</option>
              {State && State.getStatesOfCountry("ES").map((state) => ( 
                      <option 
                        value={state.isoCode} 
                        key={state.isoCode}
                      > 
                        {state.name}
                      </option>
                      ))
                }      
            </select>
          </div>
          <div>
            <label>Código Postal</label>
            <input type="number" placeholder="Introduzca Código Postal" />
          </div>
          <div>
            <label>Teléfono</label>
            <input type="number" placeholder="Introduzca un Teléfono" />
          </div>
          <Popup trigger=
                {<button type = "button">Confirmar pedido</button>}
                position="right center">
                <div style={{color:"red",position: 'absolute', top: '50%', right: '100%', transform: 'translateY(-50%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>Pedido realizado</div>
               
          </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
