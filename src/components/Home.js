import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png";
import { AiFillGithub } from "react-icons/ai";

const Home = () => {
  const projectCount = useRef(null);
  const animationProjectCount = () => {
    animate(0, 15, {
      duration: 1,
      onUpdate: (v) => {
        projectCount.current.textContent = v.toFixed();
      },
    });
  };
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I am <br /> Harsh Soni
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A Web Developer", "A Designer", "A Programmer"],
              autoStart: true,
              loop: true,
              wrapperClassName: "typewriterpara",
              cursor: "",
            }}
          />
          <div>
            <a href="mailto:harshsoni12062003@gmail.com">Hire Me</a>
            <a href="https://github.com/HarshSoni2002" target="blank">
              <AiFillGithub /> Github <BsArrowUpRight />
            </a>
          </div>
          <aside>
            <article>
              <p>
                +{" "}
                <motion.span
                  whileInView={animationProjectCount}
                  ref={projectCount}
                ></motion.span>
              </p>
              <span>Projects Done</span>
            </article>
            <article data-special>
              <p>Contact</p>
              <span>harshsoni12062003@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Harsh Soni" />
      </section>
      <BsChevronDown className="downarrow" />
    </div>
  );
};

export default Home;
