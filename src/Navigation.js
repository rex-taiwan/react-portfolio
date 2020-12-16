import * as React from "react"
import { motion } from "framer-motion"
import { MenuItem } from "./MenuItem"
const transition = { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const Navigation = ({ isOpen }) => {
  return (
    <>
      {isOpen ? (
        <>
          <motion.img
            src={require("./images/banner6.png")}
            alt="an image"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { ...transition },
            }}
            style={{
              width: 1900,
              position: "absolute",
              right: 120,
              bottom: 60,
            }}
          />
          <motion.img
            src={require("./images/Saly-30.png")}
            alt="an image"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { ...transition },
            }}
            style={{ width: 100, position: "absolute", left: 20, bottom: 0 }}
          />
        </>
      ) : null}

      <motion.ul variants={variants}>
        {itemIds.map((i) => (
          <MenuItem i={i} key={i} />
        ))}
      </motion.ul>
    </>
  )
}

const itemIds = [
  { name: "Home" },
  { name: "About" },
  { name: "Projects" },
  { name: "Contact" },
]
