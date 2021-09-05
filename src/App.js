import React from 'react';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import mapPage from "./Components/mapPage";
import HomePage from './Components/homePage';

const App = () => {
 
  return (
    <>
    <Router>
            <Switch>
            <Route exact path={"/Mapa"} component={mapPage} />
            <Route exact path={"/SIG-UNIMET"} component={HomePage} />
          </Switch>
    </Router>
    </>
  );
};

export default App;