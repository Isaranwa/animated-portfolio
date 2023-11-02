import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <div>
            <motion.h2 variants={textVariants}>PENINAH ISARANWA</motion.h2>
            <motion.h1 variants={textVariants}>
              Web developer and UI/UX designer
            </motion.h1>
          </div>

          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} className="btn1">
              Latest projects
            </motion.button>
            <motion.button variants={textVariants} className="btn2">
              Contact me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            src="./scroll.png"
            alt="scroll"
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <div className="slidingTextContainer">Developer Designer Creative</div>
      <div className="imageContainer">
        <img src="/hero.png" alt="profile image" />
      </div>
    </div>
  );
};

export default Hero;
