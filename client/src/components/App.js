import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  requestAllItems,
  receiveAllItems,
  requestAllCompanies,
  receiveAllCompanies,
  requestAllCategories,
  receiveAllCategories,
} from "../actions";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import HomeCatalog from "./Catalogs/HomeCatalog";
import ItemDetails from "./Item/ItemDetails";
import Companies from "./Lists/Companies";
import UseFetchData from "../Hooks/use-FetchData";
import CategoryFeed from "./Lists/CategoryFeed";
import FeaturedItems from "./Catalogs/FeaturedItems";
import Checkout from "./Cart/Checkout";
import CompanyFeed from "./Lists/CompanyFeed";

function App() {
  UseFetchData(requestAllItems, receiveAllItems, "http://localhost:3000/items");
  UseFetchData(
    requestAllCompanies,
    receiveAllCompanies,
    `http://localhost:3000/companies`
  );
  UseFetchData(requestAllCategories, receiveAllCategories, "/categories");

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
            <CompanyFeed />
          </Route>
          <Route path="/categories/:categoryName">
            <CategoryFeed />
          </Route>
          <Route exact path="/featured">
            <FeaturedItems />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
