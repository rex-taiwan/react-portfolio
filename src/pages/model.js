import React, { useEffect, useState, useRef } from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"

//Components
import ScrollForMore from "../components/scrollForMore"
//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
}

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
}

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
}

const Model = ({ imageDetails }) => {
  const constraintsRef = useRef(null)
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const scale2 = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const [canScroll, setCanScroll] = useState(false)

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll")
    } else {
      document.querySelector("body").classList.remove("no-scroll")
    }
  }, [canScroll])

  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      className="single"
      initial="initial"
      animate="animate"
      exit="exit"
      ref={constraintsRef}
    >
      <motion.img
        drag
        dragConstraints={constraintsRef}
        src={require("../images/Saly-21.png")}
        alt="an image"
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ scale: 1.4 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { ...transition },
        }}
        style={{ position: "absolute", top: 290, left: 0, zIndex: 2 }}
      />
      <motion.img
        drag
        dragConstraints={constraintsRef}
        src={require("../images/Saly-18.png")}
        alt="an image"
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ scale: 1.4 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { ...transition },
        }}
        style={{
          position: "absolute",
          top: 0,
          right: 50,
          zIndex: 2,
        }}
      />
      <div className="container fluid">
        <div className="row center top-row">
          <div className="top">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition },
              }}
              className="details"
            >
              <div className="location">
                <span>@LittleBitStudio</span>
              </div>
              <div className="mua">mail:chenglei.chou@gmail.com</div>
            </motion.div>

            <motion.div className="model">
              <motion.span className="last" variants={lastName}>
                <motion.span variants={letter}>P</motion.span>
                <motion.span class="is-lowercase" variants={letter}>
                  o
                </motion.span>
                <motion.span class="is-lowercase" variants={letter}>
                  r
                </motion.span>
                <motion.span class="is-lowercase" variants={letter}>
                  t
                </motion.span>
                <motion.span class="is-lowercase" variants={letter}>
                  f
                </motion.span>
                <motion.span class="is-lowercase" variants={letter}>
                  o
                </motion.span>
                <motion.span class="is-lowercase" variants={letter}>
                  l
                </motion.span>
                <motion.span class="is-lowercase" variants={letter}>
                  i
                </motion.span>
                <motion.span class="is-lowercase" variants={letter}>
                  o
                </motion.span>
              </motion.span>
              <motion.h1
                class="title has-text-white is-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 1.2, ...transition },
                }}
              >
                Hi, I'm Cheng Lei Chou, Front End Engineer who loves Coding{" "}
              </motion.h1>
            </motion.div>
          </div>
        </div>
        <div className="row bottom-row">
          <motion.img
            drag
            dragConstraints={constraintsRef}
            src={require("../images/bubble_2.png")}
            alt="an image"
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.4 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { ...transition },
            }}
            style={{ width: 300, position: "absolute", top: 0, zIndex: 2 }}
          />

          <div className="bottom">
            <motion.div className="image-container-single">
              <motion.img
                drag
                dragConstraints={constraintsRef}
                src={require("../images/alexshatov_thunder.png")}
                alt="an image"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { ...transition },
                  zIndex: 9,
                }}
                whileHover={{ scale: 1.4 }}
                style={{
                  width: 200,
                  position: "absolute",
                  right: 20,
                  top: 300,
                }}
              />
              <motion.div
                initial={{
                  y: "-50%",
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{
                  y: 0,
                  width: "100%",
                  height: window.innerWidth > 1440 ? 1500 : 400,
                  transition: { delay: 0.2, ...transition },
                }}
                className="thumbnail-single"
              >
                <motion.div
                  className="frame-single"
                  whileHover="hover"
                  transition={transition}
                >
                  <motion.img
                    drag
                    dragConstraints={constraintsRef}
                    src={require("../images/banner2.png")}
                    alt="an image"
                    style={{ scale: scale, zIndex: 1 }}
                    initial={{ scale: 1.0 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      y: window.innerWidth > 1440 ? -440 : -440,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div class="detailed-information">
        <div className="container">
          <div class="columns">
            <div class="column">
              <h2 className="title has-text-white">
                The insiration behind the artwork & <br /> what it means.
              </h2>
            </div>
            <div class="column">
              <p class="has-text-white">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </p>
              <motion.img
                drag
                dragConstraints={constraintsRef}
                src={require("../images/Saly-25.png")}
                alt="an image"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.4 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { ...transition },
                  zIndex: 99,
                }}
                style={{ position: "absolute", bottom: 0, right: 0, zIndex: 2 }}
              />
            </div>
          </div>
        </div>
      </div>

      <div class="section container mb-5">
        <div class="title has-text-white">Artworks</div>
        <div class="columns is-multiline">
          <div class="column is-4">
            <a
              href="https://spotify-connect-platform.vercel.app"
              target="_blank"
            >
              <motion.div
                whileHover={{ scale: 1, y: -20 }}
                class="card"
                style={{
                  width: `${100}%`,
                  backgroundImage: `linear-gradient(
            to bottom,
            rgba(243, 121, 221, 0),
            rgba(28, 29, 29, 0.9) 120%
            ),url(${require("../images/spotify-connect-screenshot2.png")})`,
                  height: 640,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div
                  class="card-content"
                  style={{ position: "absolute", bottom: 0 }}
                >
                  <h1 class="title has-text-white">Spotify Connect</h1>
                  <div class="content has-text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  </div>
                </div>
              </motion.div>
            </a>
          </div>

          <div class="column is-4">
            <a href="https://rex-taiwan.github.io/vueinstagram" target="_blank">
              <motion.div
                whileHover={{ scale: 1, y: -20 }}
                class="card "
                style={{
                  width: `${100}%`,
                  backgroundImage: `linear-gradient(
            to bottom,
            rgba(243, 121, 221, 0),
            rgba(28, 29, 29, 0.9)
            ),url(${require("../images/vue-project.png")})`,
                  height: 640,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div
                  class="card-content"
                  style={{ position: "absolute", bottom: 0 }}
                >
                  <h1 class="title has-text-white">Vueinstagram</h1>
                  <div class="content has-text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  </div>
                </div>
              </motion.div>
            </a>
          </div>
          <div class="column is-4">
            <a href="https://rex-taiwan.github.io/vueinstagram" target="_blank">
              <motion.div
                whileHover={{ scale: 1, y: -20 }}
                class="card "
                style={{
                  width: `${100}%`,
                  backgroundImage: `linear-gradient(
            to bottom,
            rgba(243, 121, 221, 0),
            rgba(28, 29, 29, 0.9)
            ),url(${require("../images/flote-project.png")})`,
                  height: 640,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div
                  class="card-content"
                  style={{ position: "absolute", bottom: 0 }}
                >
                  <h1 class="title has-text-white">Flote</h1>
                  <div class="content has-text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  </div>
                </div>
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Model
