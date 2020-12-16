import * as React from "react"
import { useRef } from "react"
import { motion, useCycle } from "framer-motion"
import { useDimensions } from "./use-dimensions"
import { MenuToggle } from "./MenuToggle"
import { Navigation } from "./Navigation"

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
    background: `linear-gradient(to left,#3b68fc, #7947ed)`,
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
    background: "transparent",
  },
}

export const Example = () => {
  const transition = { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        style={{ zIndex: 0, display: isOpen ? "block" : "none" }}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation isOpen={isOpen} />
      </motion.nav>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <MenuToggle isOpen={isOpen} toggle={() => toggleOpen()} />
      </motion.div>
    </>
  )
}
