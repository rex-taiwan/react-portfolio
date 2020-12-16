import React from "react"
import { Link } from "react-router-dom"
import {
  motion,
  useViewportScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion"
import { Example } from "../Example"

const Header = () => {
  const transition = { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }
  return (
    <header>
      <div className="container is-fluid">
        <div className="row space-between">
          <div className="logo">
            <Link to="/">PORTFOLIO</Link>
          </div>
          <Example />
        </div>
      </div>
    </header>
  )
}

export default Header
