import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Admin from "./Admin";

function App() {
  return (
    <Router>
      {/* DDỊnh tuyến các trang trong ưng s dụng */}
      <div className="app">
        <Switch>
          {/* Trang login */}
          <Route path="/login">
            <h2>trang Login</h2>
          </Route>
          {/* Trang checkout */}ß
          <Route path="/checkout">
            <h1>Trang checkout</h1>
          </Route>

          {/* Trang About */}

          {/* Trang quản lý (cho admin cập nhật thêm thông tin sản phẩm, ...) */}
          <Route path="/admin">
            <Admin />
          </Route>

          {/* Trang chủ */}
          <Route path="/">
            <Header />
            <Home /> 
           </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
