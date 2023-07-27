import React from 'react'
import { motion} from "framer-motion"
import Owner from './Owner';
import Menu from './Menu';

const Home = () => {


  const options = {
    initial:{
      
        y:"-100%",
        opacity:0,

      },
      whileInView:{
        y:0,
        opacity:1,
      }


    };

  


  return (

    <>
     <section className="home">
       <div>
         <motion.h1 {...options}>BTECH Pizza Wala</motion.h1>
         <motion.p {...options } transition= {{delay:0.3}}>The Classic Way To Celebrate...</motion.p>
        </div>

       <motion.a href='#menu' {...options }  transition= {{delay:0.3}}
          //  initial={{ x:"-100%",
          //     opacity:0}}      whileInView={{x:0, opacity:1}} 
       
      
          > 
         Explore Menu
        </motion.a>
     </section>
     <Owner/>
     <Menu/>
    </>
  

 );
  
}

export default Home
