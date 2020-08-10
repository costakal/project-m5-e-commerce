import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import HomeCatalog from "./Catalogs/HomeCatalog";
import ItemDetails from "./Item/ItemDetails";
import Companies from "./Lists/Companies";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            {/* <div style="margin-top:*navbar height*> */}
            <HomeCatalog />
            {/* </div> */}
          </Route>
          <Route exact path="/items/:itemId">
            <ItemDetails />
          </Route>
          <Route exact path="/companieslist">
            <Companies />
          </Route>
          <Route exact path="/companies/:companyId">
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
