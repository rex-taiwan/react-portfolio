import * as React from "react"
import {
  motion,
  useViewportScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion"

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
)

const transition = { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }
export const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <motion.button
      className="menu"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { ...transition },
      }}
      onClick={toggle}
    >
      {isOpen ? null : <>MENU</>}

      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5", opacity: 0 },
            open: { d: "M 3 16.5 L 17 2.5", opacity: 1 },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 0 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346", opacity: 0 },
            open: { d: "M 3 2.5 L 17 16.346", opacity: 1 },
          }}
        />
      </svg>
    </motion.button>
  )
}
