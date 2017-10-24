import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Disney from "./Disney";
import Smurfs from "./Smurfs";

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/smurfs" component={Smurfs} />
            <Route path="/disney" component={Disney} />
        </Switch>
    </main>
);

export default Main;