import React from 'react';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import mapPage from "./Components/mapPage";
import HomePage from './Components/homePage';
import dashboardPage from "./Components/dashboardPage";

const App = () => {
 
  return (
    <>
    <Router>
            <Switch>
            <Route exact path={"/Mapa"} component={mapPage} />
            <Route exact path={"/SIG-UNIMET"} component={HomePage} />
            <Route exact path={"/Dashboard"} component={dashboardPage} />
          </Switch>
    </Router>
    </>
  );
};

export default App;