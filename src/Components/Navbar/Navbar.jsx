import React, { useState } from "react";
import "./Navbar.scss";
import { navLinks } from "../../Data";
import { socialIcons } from "../../Data";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const varients = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 50,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };
  const navLinkVarients = {
    hidden: {
      display: "none",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: -30,
      transition: {
        delay: 0.7,
      },
    },
  };
  return (
    <div className="header">
      <div className="nav_container">
        <div className="logo">
          <h3>R</h3>
        </div>
        <ul className="nav_links">
          {navLinks.map((navLink, index) => {
            return (
              <li key={index}>
                <a href={`${navLink}`}>{navLink}</a>
              </li>
            );
          })}
        </ul>
        <div className="social_icons">
          {socialIcons.map((socialIcons, index) => {
            return <div key={index}>{socialIcons}</div>;
          })}
        </div>
        <div className="menu">
          <HiMenuAlt4
            onClick={() => {
              setToggle(true);
            }}
          />
        </div>
        <motion.div
          className="closeMenu"
          variants={varients}
          initial="hidden"
          animate={toggle ? "visible" : "hidden"}
        ></motion.div>
        <motion.div
          className="menuX"
          variants={navLinkVarients}
          animate={toggle ? "visible" : "hidden"}
        >
          <HiX
            onClick={() => {
              setToggle(false);
            }}
          />
          {navLinks.map((navLinks, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setToggle(false);
                }}
              >
                <a href={`#${navLinks}`}>{navLinks}</a>
              </li>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
