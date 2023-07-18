import React from "react";
import { motion } from "framer-motion";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      x: "-100%",
      opacity: 0,
    },
    twoAndThree: {
      y: "-100%",
      opacity: 0,
    },
    four: {
      x: "+100%",
      opacity: 0,
    },
  };
  return (
    <div id="services">
      <h2>Problem Solved</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>350+</h3>
          <p>Problem Solved</p>
        </motion.div>

        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <SiLeetcode />
          <a href="https://leetcode.com/harsh_8262/" target="blank">
            <span>LeetCode</span>
          </a>
        </motion.div>

        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{ delay: 0.3 }}
        >
          <SiCodechef />
          <a href="https://www.codechef.com/users/harsh_5542" target="blank">
            <span>Codechef</span>
          </a>
        </motion.div>
        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <SiGeeksforgeeks />
          <a
            href="https://auth.geeksforgeeks.org/user/harshsoni12062003/practice"
            target="blank"
          >
            <span>GeeksForGeeks</span>
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
