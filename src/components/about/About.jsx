import React from 'react'
import {Link } from "react-router-dom"
import {RiFindReplaceLine} from "react-icons/ri"
import me from '../../assets/Owner.jpeg'

const About = () => {
  return  <section className='about'>
    <main>
    <h1>About Us</h1>


    <article>
    <h4>BTECH Pizza Wala</h4>
    <p>Our Aim is to deliever tastey pizza in minimum time.</p>
    

   <p>Explore the different types of pizzas. Click below to see the menu</p>
   <Link to="/">
    <RiFindReplaceLine/>
   </Link>

    </article>

    <div>
      <h2>Owner</h2>
      <article>
        <div>
        <img src={me} alt='owner'/>
        <h3>Himanshu Agarwal</h3>
       </div>

       <p>
        I am Himanshu Agarwal Owner of BTECH Pizza Wala . Affilated to best tastey pizza on the planet...
       </p>
      </article>
    </div>

    </main>
  </section>
}

export default About
