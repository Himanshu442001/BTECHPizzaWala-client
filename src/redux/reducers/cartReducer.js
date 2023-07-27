import { createReducer } from "@reduxjs/toolkit";

const initialState= {
    cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):
    {
      cheesePizza:{
          quantity:0,
          price:280
      },
      HawaiianPizza:{
          quantity:0,
          price:400
      },
      pepperoniPizza:{
          quantity:0,
          price:350
      },
      MargherittaPizza:{
        quantity:0,
        price:300
    },
  },
    subTotal:localStorage.getItem("cartPrices")? JSON.parse(localStorage.getItem("cartPrices")).subTotal:0,
    tax:localStorage.getItem("cartPrices")? JSON.parse(localStorage.getItem("cartPrices")).tax:0,
    deliveryCharges:localStorage.getItem("cartPrices")? JSON.parse(localStorage.getItem("cartPrices")).deliveryCharges:0,
    total:localStorage.getItem("cartPrices")? JSON.parse(localStorage.getItem("cartPrices")).total:0,
    deliveryInfo:localStorage.getItem("deliveryInfo")?JSON.parse(localStorage.getItem("deliveryInfo")):{},


     
}
export const cartReducer  = createReducer(initialState,{


    cheesePizzaIncrement: (state) => {
        state.cartItems.cheesePizza.quantity += 1;
      },
      HawaiianPizzaIncrement: (state) => {
        state.cartItems.HawaiianPizza.quantity += 1;
      },
      pepperoniPizzaIncrement: (state) => {
        state.cartItems.pepperoniPizza.quantity += 1;
      },
      MargherittaPizzaIncrement: (state) => {
        state.cartItems.MargherittaPizza.quantity += 1;
      },
      cheesePizzaDecrement: (state) => {
        state.cartItems.cheesePizza.quantity -= 1;
      },
      HawaiianPizzaDecrement: (state) => {
        state.cartItems.HawaiianPizza.quantity -= 1;
      },
      pepperoniPizzaDecrement: (state) => {
        state.cartItems.pepperoniPizza.quantity -= 1;
      },
      MargherittaPizzaDecrement: (state) => {
        state.cartItems.MargherittaPizza.quantity -= 1;
      },
    
      calculatePrice: (state) => {
        state.subTotal =
          state.cartItems.cheesePizza.price *
            state.cartItems.cheesePizza.quantity +
          state.cartItems.HawaiianPizza.price *
            state.cartItems.HawaiianPizza.quantity +
          state.cartItems.pepperoniPizza.price *
            state.cartItems.pepperoniPizza.quantity +
            state.cartItems.MargherittaPizza.price *
              state.cartItems.MargherittaPizza.quantity;
    
        state.tax = state.subTotal * 0.18;
        state.deliveryCharges = state.subTotal > 1000 ? 0 : 50;
        state.total = state.subTotal + state.tax + state.deliveryCharges;
      },

    
    
      emptyState: (state) => 
    {
        state.cartItems = {
         cheesePizza: {
            quantity: 0,
            price: 280,
          },
          HawaiianPizza : {
            quantity: 0,
            price: 400,
          },
          pepperoniPizza: {
            quantity: 0,
            price: 350,
          },
          MargherittaPizza: {
            quantity: 0,
            price: 300,
          },
        };
    
        state.subTotal = 0;
        state.deliveryCharges= 0;
        state.tax = 0;
        state.total = 0;
    },
    addDeliveryInfo: (state, action) => {
        state.deliveryInfo = {
          hNo: action.payload.hNo,
          city: action.payload.city,
          state: action.payload.state,
          country: action.payload.country,
          pincode: action.payload.pincode,
          phoneNo: action.payload.phoneNo,
        };
      },
});
