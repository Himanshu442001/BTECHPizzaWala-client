import React from 'react'
import { motion} from "framer-motion"
import my from "../../assets/Owner.jpeg"


const Owner = () => {

  const options = {
    initial:{
      x:"-100%",
      opacity:0


    },
    whileInView : {
      x:0,
      opacity:1

    }
  }


  return( <section className="owner">
  <motion.div {...options} transition={{delay:0.3}
  }>
  <img src={my} alt='Owner...' height={250} width={250}/>
  <h3>Himanshu Agarwal</h3>
  <p>
    Hiii! I am the Owner of the BTECH Pizaa wala...
    <br/>
    Our Aim is to deliever the tastey pizza in minimum time..

    
  </p>

  </motion.div>

  </section>)
}

export default Owner
