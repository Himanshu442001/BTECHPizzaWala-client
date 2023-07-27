import React from 'react'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return <section className='paymentSuccess'>
  <main>
  <h1>Order Confirm</h1>
  <p>Order Placed Successfully, You can check Order status below</p>
  <Link to="/myorders"> Check Status</Link>

  </main>

  </section>
}

export default PaymentSuccess
