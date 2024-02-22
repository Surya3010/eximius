import React from "react";

import Link from "next/link";

import NavStyle from "../styles/nav.module.css";

import { motion } from "framer-motion";
import { navBarContent } from "../constants/constants";

const Nav = () => {
  return (
    <nav className={NavStyle.nav}>
      <motion.h1 drag>
        <motion.span
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            delay: 0.25,
            duration: 0.5,
            type: "spring",
            stiffness: 150,
          }}
        >
          Eximius
        </motion.span>
      </motion.h1>
      {navBarContent.map((val)=>{return(
          <Link href={`/${val}`} style={{textTransform: "capitalize", fontWeight:'700'}}><span>{val}</span></Link>
        )})}
      <ul className={NavStyle.iconlinks}>
        <li>
          <i className="fab fa-instagram"></i>
        </li>
        <li>
          <i className="fab fa-twitter"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
