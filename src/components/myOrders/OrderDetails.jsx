import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderDetails } from '../../redux/actions/order';
import { useParams } from 'react-router-dom';
import Loader from '../layout/Loader';

const OrderDetails = () => {

const params = useParams();  
const {order,loading } = useSelector((state)=>state.orders);
const dispatch = useDispatch();

useEffect(() => {
 dispatch(getOrderDetails(params.id));

}, [ params.id,dispatch]);

  return <section className='orderDetails'>
   {
    loading === false  && order !== undefined  ? (
    <main>
    <h1>Order Details</h1>
        <div>
        <h1>Delivery </h1>
        <p>
            <b>Adress</b>
            {`${order.deliveryInfo.hNo} ${order.deliveryInfo.city} ${order.deliveryInfo.state} ${order.deliveryInfo.country} ${order.deliveryInfo.pincode}`}
        </p>
        </div>

        <div>
        <h1>Contact</h1>
        <p>
            <b>Name</b>
            {order.user.name}
        </p>
        <p>
            <b>Phone No.</b>
            {order.deliveryInfo.phoneNo}
        </p>
        </div>

        <div>
        <h1>Status</h1>
        <p>
            <b>Order Status</b>
         {order.orderStatus}
        </p>
        <p>
            <b>Placed At</b>
          {order.createdAt.split("T")[0]}
        </p>

        <p>
            <b>Delivered</b>
            {order.deliveredAt ? order.deliveredAt.split("T")[0] : "NA"}        </p>
        </div>

        <div>
        <h1>Payment</h1>
        <p>
            <b>Payment Method</b>
            {order.paymentMethod}
        </p>
        <p>
            <b>Payment Reference</b>
            {order.paymentMethod === "Online"
                ? `#${order.paymentInfo}`
                : "NA"}
        </p>

        <p>
            <b>Paid At</b>
            {order.paymentMethod === "Online"
                ? order.paidAt.split("T")[0]
                : "NA"}
        </p>
        </div>

        <div>
        <h1>Amount</h1>
        <p>
            <b>Total Items Charges</b>
            ₹{order.itemsPrice} 
        </p>
        <p>
            <b>Delivery Charges</b>
            ₹{order.deliveryCharges}
        </p>

        <p>
            <b>GST</b>
            ₹{order.taxPrice}
        </p>

        <p>
            <b>Total Amount</b>
            ₹{order.totalAmount}
        </p>
        </div>
        <article>
        <h1>Ordered Items</h1>
        <div>
            <h4>Cheese Pizza </h4>
            <div>
                <span>{order.orderItems.cheesePizza.quantity}</span>x{" "} <span>{order.orderItems.cheesePizza.price}</span>
            </div>
        </div>

        <div>
            <h4>The Hawaii Pizza</h4>
            <div>
                <span>{order.orderItems.HawaiianPizza.quantity}</span>x{" "} <span>{order.orderItems.HawaiianPizza.price}</span>
            </div>
        </div>

        <div>
            <h4> Pepperoni Pizza </h4>
            <div>
            <span>{order.orderItems.pepperoniPizza.quantity}</span>x{" "} <span>{order.orderItems.pepperoniPizza.price}</span>
            </div>
        </div>

        <div>
            <h4> Margheritta Pizza </h4>
            <div>
            <span>{order.orderItems.MargherittaPizza.quantity}</span>x{" "} <span>{order.orderItems.MargherittaPizza.price}</span>
            </div>
        </div>
        
        <div>
            <h4 style={{
                  fontWeight: 800,
                }}
            >Sub Total</h4>
            <div style={{
                  fontWeight: 800,
                }}
            >₹{order.itemsPrice}</div>
        </div>

        </article>

        
    </main>) : (<Loader/>)
   }
  </section>
}

export default OrderDetails
