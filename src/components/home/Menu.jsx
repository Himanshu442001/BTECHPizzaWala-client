import React from 'react'
import Menucard from './Menucard'
import cheesePizza from "../../assets/cheesePizza.webp"
import  HawaiianPizza from "../../assets/HawaiianPizza.webp"
import  pepperoniPizza from "../../assets/pepperoniPizza.webp"
import  MargherittaPizza from "../../assets/MargherittaPizza.webp"
import toast from "react-hot-toast"
import { useDispatch } from 'react-redux'

const Menu = () => {

  const dispatch = useDispatch();

  const addToCartHandler = (itemNum)=>{
    switch (itemNum) {
      case 1:
        dispatch({ type: "cheesePizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 2:
        dispatch({ type: "HawaiianPizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 3:
        dispatch({ type: "pepperoniPizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 4:
        dispatch({ type: "MargherittaPizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;

      default:
        dispatch({ type: "cheesePizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
    }
  }

  return <section id='menu'>
  <h1>MENU</h1>

  <div>
  <Menucard  
  itemNum={1} 
  pizzaSrc ={cheesePizza} 
  price={280} 
  title= "Cheese Pizza"
  handler={addToCartHandler}
  delay={0.2}
  />
  <Menucard  
  itemNum={2} 
  pizzaSrc ={HawaiianPizza} 
  price={400} 
  title= "The Hawaii Pizza"
  handler={addToCartHandler}
  delay={0.4}
  />
  <Menucard  
  itemNum={3} 
  pizzaSrc ={pepperoniPizza} 
  price={350} 
  title= " Pepperoni Pizza"
  handler={addToCartHandler}
  delay={0.6}
  />
<Menucard  
  itemNum={4} 
  pizzaSrc ={MargherittaPizza} 
  price={300} 
  title= "Margheritta Pizza"
  handler={addToCartHandler}
  delay={0.8}
  />

  </div>

  </section>
}

export default Menu
