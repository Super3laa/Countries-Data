import React from "react";
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import CountryProfile from "../components/CountryProfile";
import Home from "../components/home";
export default function Routes(data) {
  const routes = [
    { path: "/", Component: Home },
    { path: "/country/:name", Component: CountryProfile }
  ]
  return (
    <Router>
      <Switch>
        {
          routes.map(({ path, Component }) => {
            return <Route exact path={path} component={(props)=><Component {...props} {...data} />} />
          })
        }
      </Switch>
    </Router>
  )
}