import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
function Aniamtioncontrol() {
  const [isVisible, setisVisible] = useState(true);
  return (
    <div className="flex justify-center  mt-28 flex-col mx-auto">
      <motion.button 
      layout
      
        className="bg-slate-700 border-black border-2 text-white p-5 rounded-md font-semibold hover:text-slate-700 hover:border-r-2 hover:border-b-2 hover:bg-white   w-36   mx-auto my-auto py-3"
        onClick={() => {
          setisVisible(!isVisible);
        }}
      >
        Click me
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="w-36 h-36 bg-slate-700 rounded-md mx-auto my-5"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Aniamtioncontrol;
