import "./App.css";
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes as Switch,
//   Route,
// } from "react-router-dom";

// import Header from "./components/header/header";
// import Category from "./components/category/category";
import Main from "./components/main-page/main";

import { Provider } from "react-redux";

import store from "./store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        {/* <Router> */}
        {/* <Header /> */}
        {/* <Switch>
            <Route path="/shop"> */}
        <Main />
        {/* </Route>
            <Route path="/main">
              <Main />
            </Route>
            <Route path="/category">
              <Category />
            </Route>
          </Switch>
        </Router> */}
      </Provider>
    </div>
  );
};

export default App;
