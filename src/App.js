import 'tailwindcss/dist/base.css'
import 'styles/globalStyles.css'
import React from 'react'
import RestaurantLandingPage from 'demos/RestaurantLandingPage.js'
import AboutUsPage from 'pages/AboutUs.js'
import ContactUsPage from 'pages/ContactUs.js'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Map from 'components/map/App'
import Gida from 'components/uwargida/App'
import Direba from 'components/direba/App'
import CSR from  'components/csr/App'
import Media from  'components/social/App'
import Partners from 'pages/Partners'
import Ruwa from 'components/gidanruwa/App'

export default function App() {

  return (
    <Router>
      <Switch>
       
        <Route exact path="/">
          <RestaurantLandingPage />
        </Route>
        <Route exact path="/about-us">
          <AboutUsPage />
        </Route>
        <Route exact path="/our-partners">
          <Partners />
        </Route>
        <Route exact path="/contact-us">
          <ContactUsPage />
        </Route>
        <Route exact path="/kirana-locations">
          <Map />
        </Route>
        <Route exact path="/kirana-uwar-gida">
          <Gida />
        </Route>
        <Route exact path="/kirana-direba">
          <Direba />
        </Route>
        <Route exact path="/kirana-ruwangida">
          <Ruwa />
        </Route>
        <Route exact path="/privacy-policy">
          <ContactUsPage />
        </Route>
        <Route exact path="/kirana-csr">
          <CSR />
        </Route>
        <Route exact path="/kirana-media">
          <Media />
        </Route>
      </Switch>
    </Router>
  )
}
