import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  
  const [hamburguesaQueso,setHamburguesaQueso] = useState(0)
  const [hamburguesaVeg,setHamburguesaVeg] = useState(0)
  const [hamburguesaFritas,setHamburguesaFritas] = useState(0)
  const [subTotal,setSubTotal] = useState(0)
  const [impuestos,setImpuestos] = useState(0)
  const [total,setTotal] = useState(2.30)
  const gastosEnvios= useState(2.30)

      
  const increment = (item) => {
    
      switch (item) {
        case 'hamburguesaQueso':
          setHamburguesaQueso(prev => prev + 1)
          
          break;
        case 'hamburguesaVeg':
          setHamburguesaVeg(prev => prev + 1)
          
          break;
        case 'hamburguesaFritas':
          setHamburguesaFritas(prev => prev + 1)
          
          break;
        default:
      }
      
  };

  const decrement = (item) => { 
    switch (item) {
      case 'hamburguesaQueso':
        if (hamburguesaQueso !== 0){
          setHamburguesaQueso(prev => prev - 1)
        }else{
          setHamburguesaQueso(0);
        }
        break;
      case 'hamburguesaVeg':
        if (hamburguesaVeg !== 0){
          setHamburguesaVeg(prev => prev - 1)
          
        }else{
          setHamburguesaVeg(0);
        }
        break;
      case 'hamburguesaFritas':
        if (hamburguesaFritas !== 0){
          setHamburguesaFritas(prev => prev -1)
          
        }else{
          setHamburguesaFritas(0)
        }   
        
        break;
      default:
    }
  };
  
  useEffect(()=>{
      setSubTotal(hamburguesaFritas*6.10+hamburguesaQueso*3.30+hamburguesaVeg*4.5)
      setImpuestos(()=>(subTotal*0.21).toFixed(2))
      setTotal(()=> (parseFloat(subTotal)+parseFloat(impuestos)+parseFloat(gastosEnvios)).toFixed(2))
      
  },[subTotal,hamburguesaFritas,hamburguesaQueso,hamburguesaVeg,gastosEnvios,impuestos])

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Hamburguesa con queso"}
          img={burger1}
          value={hamburguesaQueso}
          increment={() => increment("hamburguesaQueso")}
          decrement={() => decrement("hamburguesaQueso")}
        />
        <CartItem
          title={"Hamburguesa vegetariana con queso"}
          img={burger2}
          value={hamburguesaVeg}
          increment={() => increment("hamburguesaVeg")}
          decrement={() => decrement("hamburguesaVeg")}
        />
        <CartItem
          title={"Hamburguesa con queso y patatas fritas"}
          img={burger3}
          value={hamburguesaFritas}
          increment={() => increment("hamburguesaFritas")}
          decrement={() => decrement("hamburguesaFritas")}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>€ {subTotal.toFixed(2)}</p>
          </div>
          <div>
            <h4>IVA</h4>
            <p>€ {impuestos}</p>
          </div>
          <div>
            <h4>Gastos de envío</h4>
            <p>€ {gastosEnvios}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>€ {total}</p>
          </div>
          <Link to="/shipping">Envío</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
