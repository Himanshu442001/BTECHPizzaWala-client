import React from 'react'
import { Link } from 'react-router-dom';
import CartItem from './CartItem'
import Pizza1 from "../../assets/cheesePizza.webp"
import  Pizza2 from "../../assets/HawaiianPizza.webp"
import  Pizza3 from "../../assets/pepperoniPizza.webp"
import { useSelector } from 'react-redux';
import Pizaa4 from "../../assets/MargherittaPizza.webp"
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


const Cart = () => {
  const {
    cartItems:{
    cheesePizza:{
      quantity:cheesePizza
    },
    HawaiianPizza:{
      quantity:HawaiianPizza

    },
    pepperoniPizza:{
      quantity:pepperoniPizza
    },
    MargherittaPizza:{
      quantity:MargherittaPizza
    },

  },
    subTotal,
    tax,
    deliveryCharges,
    total,
  } = useSelector((state)=>state.cart); 
 const {cartItems:orderItems} = useSelector((state)=>state.cart); 


  const dispatch = useDispatch();
  const increment = (item)=>{
    switch(item){
      case 1:
        dispatch({ type: "cheesePizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        dispatch({ type: "HawaiianPizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        dispatch({ type: "pepperoniPizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 4:
      dispatch({ type: "MargherittaPizzaIncrement" });
      dispatch({ type: "calculatePrice" });
      break;

      default:
        dispatch({ type: "cheesePizzaIncrement" });
         dispatch({ type: "calculatePrice" });
        break;
    }
};

   
const decrement = (item)=>{

      
  switch (item) {
        
       case 1:
          if (cheesePizza === 0) break;
          dispatch({ type: "cheesePizzaDecrement" });
          dispatch({ type: "calculatePrice" });
          break;
       
        case 2:
          if (HawaiianPizza === 0) break;
          dispatch({ type: "HawaiianPizzaDecrement" });
          dispatch({ type: "calculatePrice" });
          break;
        case 3:
          if (pepperoniPizza === 0) break;
          dispatch({ type: "pepperoniPizzaDecrement" });
          dispatch({ type: "calculatePrice" });
          break;
        case 4:
          if (MargherittaPizza === 0) break;
          dispatch({ type: "MargherittaPizzaDecrement" });
          dispatch({ type: "calculatePrice" });
          break;  
  
        default:
          if (cheesePizza === 0) break;
          dispatch({ type: "cheesePizzaDecrement" });
          dispatch({ type: "calculatePrice" });
          break;
      }
    };
    useEffect(() => {
     localStorage.setItem("cartItems", JSON.stringify(orderItems));
     localStorage.setItem("cartPrices", JSON.stringify({
      subTotal,
      tax,
      deliveryCharges,
      total,
     }));

    }, [orderItems,subTotal,tax,deliveryCharges,total,]);
    
  return (
  <section className='cart'>
    <main>
    <CartItem title={"Cheese Pizza"} img={Pizza1} value={cheesePizza}
    increment={()=>increment(1)}
    decrement={()=>decrement(1)}
    />

   <CartItem title={"Hawaiian Pizza"} img={Pizza2} value={HawaiianPizza}
    increment={()=>increment(2)}
    decrement={()=>decrement(2)}
    /> 

  <CartItem title={"Pepperoni Pizza"} img={Pizza3} value={pepperoniPizza}
    increment={()=>increment(3)}
    decrement={()=>decrement(3)}
    />

  <CartItem title={"Margheritta Pizza"} img={ Pizaa4} value={MargherittaPizza}
    increment={()=>increment(4)}
    decrement={()=>decrement(4)}
    />
    <article>
        <div>
            <h4>Sub Total</h4>
            <p>₹{subTotal}</p>
        </div>

        <div>
            <h4>GST</h4>
            <p>₹{tax}</p>
        </div>

        <div>
            <h4>Delievery Charges</h4>
            <p>₹{deliveryCharges}</p>
        </div>

        <div>
            <h4>Total</h4>
            <p>₹{total}</p>
        </div>
        <Link to = "/delivery">Checkout</Link>
    </article>



  </main>
  

  </section>
  );
};

export default Cart
