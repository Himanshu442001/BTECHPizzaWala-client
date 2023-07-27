import React from 'react'
import {AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai"

const Footer = () => {
    return <footer>

    <div>
        <h2>BTECH Pizza Wala</h2>
        <p>We are trying you to give the best taste possible....</p>
        <br/>
        <em>We give attention to genuine feedback..</em>

        <strong>©2023| All Rights are Reserved @HimanshuAgarwal</strong>

    </div>
    <aside>
      <h4>Follow Us</h4>  
      <a href='https://instagram.com/the_spritual_boy'>
        <AiFillInstagram/>
      </a>
      <a href='https://www.linkedin.com/in/himanshu-agarwal-48b615211'>
        <AiFillLinkedin/>
      </a>
      <a href='https://github.com/Himanshu442001'>
        <AiFillGithub/>
      </a>
    </aside>

    </footer> 
  
}

export default Footer
