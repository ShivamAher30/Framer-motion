import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Viewbasedanimation() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("Is in View? ", isInView);
  }, [isInView]);

return (
    <div>
        <div className="h-[120vh] bg-slate-700" />
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{ backgroundColor: isInView ? "red" : "#22c55e" , opacity: 1 }}
            className={`h-[120vh]`}
            transition={{
                duration: 5, // Increased duration to make the transition slower
                delay: 0.5,
            }}
            ref={ref}
        ></motion.div>
    </div>
);
}

export default Viewbasedanimation;
