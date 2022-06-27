import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainFooter from "./components/footer/MainFooter";
import MainHeader from "./components/header/MainHeader";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

const MainRoutes = () => {
  return (
    <Router>
      <MainHeader />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
      <MainFooter />
    </Router>
  );
};
export default MainRoutes;
