

import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { motion } from "framer-motion";

const Loader = () => {
  const options = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
   
  };
  return (
    <div className="loader">
      <FaPizzaSlice />

      <div>
        <motion.p {...options} >Loading...</motion.p>
      </div>
    </div>
  );
};

export default Loader;