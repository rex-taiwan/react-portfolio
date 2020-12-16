import * as React from "react"
import { Link } from "react-router-dom"
import {
  motion,
  useViewportScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion"
import ProgressiveImage from "react-progressive-image"
const transition = { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }
const Home = ({ imageDetails, image }) => {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  return (
    <>
      <main>
        <div className="container">
          <AnimatePresence initial={true} exitBeforeEnter>
            <motion.img
              src={require("../images/dog.png")}
              alt="an image"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.1 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { ...transition },
              }}
              style={{ width: 200, position: "absolute", right: 0, bottom: 0 }}
            />
            <motion.img
              src={require("../images/camera_2.png")}
              alt="an image"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { ...transition },
              }}
              style={{ width: 200, position: "absolute", left: 20, top: 250 }}
            />
          </AnimatePresence>

          <div className="row center">
            <div className="image-container">
              <div
                className="thumbnail"
                ref={image}
                style={{
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
              >
                <div className="frame">
                  <Link to={`/model/yasmeen-tariq`}>
                    <ProgressiveImage
                      src={require("../images/banner2.png")}
                      placeholder={require("../images/banner2.png")}
                    >
                      {(src) => (
                        <motion.img
                          src={src}
                          alt="Yasmeen Tariq"
                          transition={transition}
                        />
                      )}
                    </ProgressiveImage>
                  </Link>
                </div>
              </div>
              <motion.div
                exit={{ opacity: 0 }}
                transition={transition}
                className="information"
              >
                <div className="title">Yasmeen Tariq</div>
                <div className="location">
                  <span>28.538336</span>
                  <span>-81.379234</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
