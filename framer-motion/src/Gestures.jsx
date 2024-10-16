import React from "react";
import { motion, MotionConfig } from "framer-motion";
function Gestures() {
  return (
    <div>
      <MotionConfig >
        <motion.div
          whileTap={{
            scale: 0.5,
            rotate: 5,
          }}
          className="w-36 h-36 bg-slate-700 rounded-md mx-auto my-5"
          whileHover={{
            scale: 1.2,
          }}
        ></motion.div>
      </MotionConfig>
    </div>
  );
}

export default Gestures;
