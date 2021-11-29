import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Pages
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Cards from "./pages/Cards";
import Charts from "./pages/Charts";
import Branch from "./pages/Company/Branch";
import BranchEdit from "./pages/Company/BranchEdit";
import BranchAdd from "./pages/Company/BranchAdd";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/cabang" component={Branch} />
      <Route path="/edit_cabang" component={BranchEdit} />
      <Route path="/tambah_cabang" component={BranchAdd} />
      <Route path="/signup" component={SignUp} />
      <Route path="/cards" component={Cards} />
      <Route path="/charts" component={Charts} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
