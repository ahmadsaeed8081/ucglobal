import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Private from "./Private";
import Public from "./Public";

import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Profile from "../Pages/Profile";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Public>
              <Login />
            </Public>
          }
        />
        <Route path="dashboard">
          <Route
            path="home"
            element={
              <Private>
                <Home />
              </Private>
            }
          />
          <Route
            path="products"
            element={
              <Private>
                <Products />
              </Private>
            }
          />
          <Route
            path="profile"
            element={
              <Private>
                <Profile />
              </Private>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
