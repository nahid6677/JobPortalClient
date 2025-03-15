import React from "react";
import * as motion from "motion/react-client";
import { easeOut } from "motion";
import team1 from "../../assets/team/team_1.jpg"
import team2 from "../../assets/team/team_2.jpg";
// import team3 from "../../assets/team/team_3.jpg"
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            animate={{ y: [80, 100, 80] }}
            transition={{ duration: 10, repeat: Infinity }}
            src={team2}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-blue-400 border-l-4 border-b-4 shadow-2xl"
          />
          <motion.img
            animate={{ x: [100, 130, 100] }}
            transition={{ duration: 15, delay:4, repeat: Infinity }}
            src={team1}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-blue-400 border-l-4 border-b-4 shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: [0,50,0] }}
            transition={{
              duration: 8,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest
            <motion.span
              animate={{ color: ["#fff046", "#46ffc0", "#fd46ff"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {" "}
              Jobs{" "}
            </motion.span>
            For You!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
