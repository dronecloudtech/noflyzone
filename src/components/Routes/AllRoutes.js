import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import AddZone from "../pages/AddZone";

import Menu from "../Menu";
import Footer from "../Footer";
export default function AllRoutes() {
  return (
    <BrowserRouter>
      <div>
        <Menu items={["EXPLORE", "CONTACT", "ADD ZONE"]} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add zone" component={AddZone} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
