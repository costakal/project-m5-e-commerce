import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import HomeCatalog from "./Catalogs/HomeCatalog";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomeCatalog />
          </Route>
          <Route path="/items/:itemId">
            <div>replace this div with individual item component </div>
          </Route>
          <Route path="/companies">
            <div>replace this div with the companies component</div>
          </Route>
          <Route path="/companies/:companyId">
            <div>
              replace this div with individual company store items component
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
