import React from 'react'
import { motion} from "framer-motion"
// import pizzform1 from "../../assets/pizzform1.jpg";



const Contact = () => {
  return <section className="contact">
  <motion.form

  initial = {{
    x:"-100vw",
    opacity:0,
  }}
  animate={{
    x:0,
    opacity:1,
  }}
  transition={{delay:0.2}}
  
  
  
  >
  <h2>Contact Us</h2>
  <input type='text' placeholder='Enter your Name '/>
  <input type='email' placeholder='Enter your Email'/>
  <textarea placeholder='Enter your Message....' cols ='30' rows ='10'></textarea>

  <button type='submit'>Send</button>
  </motion.form>

  <motion.div className='formBorder'
   initial = {{
    x:"100vw",
    opacity:0,
  }}
  animate={{
    x:0,
    opacity:1,
  }}
  transition={{delay:0.2}}
  
  >
  {/* <motion.div>
  <img src= {pizzform1}/>

  </motion.div> */}


  </motion.div>
   
  </section>
}

export default Contact
