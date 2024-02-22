import Typewriter from 'typewriter-effect';
import BackgroundAnimation from "../components/Background";
import Projects from "../components/Projects";
import { motion } from "framer-motion";

import React, { useEffect } from "react";

import HomeStyles from "../styles/Home.module.css";
import Technologies from "../components/Technologies";
import Footer from "../components/Footer";
import { IntroContent } from "../constants/constants";

export default function Home() {
  return (
    <>
      <motion.div
        className={HomeStyles.home}
        exit="exit"
        variants={{
          exit: {
            y: "100vw",
            transition: { ease: "easeInOut" },
          },
        }}
      >
        <div className={HomeStyles.introtext}>
          <motion.h1
            animate={{ scale: 1, opacity: 1, y: "0" }}
            transition={{
              delay: 0.25,
              duration: 0.75,
              type: "spring",
              stiffness: 190,
            }}
            initial={{ scale: 0, opacity: 0, y: "-100vh" }}
          >
            {IntroContent.title}
          </motion.h1>
          <div style={{ fontSize: '2rem', fontFamily: 'fantasy', textAlign: 'center' }}>
            <Typewriter
              options={{
                strings:
                  ['Innovate to Disrupt.',
                    'Disrupt to Innovate.'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <motion.p
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.75 }}
            initial={{ scale: 0, opacity: 0 }}
          >
           <span style={{display:'block', textAlign:'center'}}>{IntroContent.content1}</span>
           <span style={{display:'block', textAlign:'center'}}>{IntroContent.content2}</span>
          </motion.p>
          <motion.div
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.75 }}
            initial={{ scale: 0, opacity: 0 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <button className={HomeStyles.registerbtn}>Register</button>
              <span style={{marginTop: '15px'}}>12th - 13th August</span>
              <span style={{marginTop: '15px'}}>Indian Institute of Management Bangalore</span></div>
          </motion.div>
        </div>
        <BackgroundAnimation />
      </motion.div>

      <Projects />
      <Technologies />
      <Footer />
    </>
  );
}
