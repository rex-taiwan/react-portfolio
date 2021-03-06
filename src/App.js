import React from "react"
import { AnimatePresence } from "framer-motion"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
//Pages
import Home from "./pages/home"
import Model from "./pages/model"
//components
import Header from "./components/header"
//Styles
import "./App.scss"

function App() {
  const imageDetails = {
    width: 824,
    height: 750,
  }

  return (
    <Router>
      <Header />
      <Route
        render={({ location }) => (
          <AnimatePresence initial={true} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                path="/"
                render={() => <Model imageDetails={imageDetails} />}
              />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  )
}

export default App
