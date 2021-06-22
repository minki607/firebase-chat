import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChatPage from "./page/ChatPage/ChatPage";
import LoginPage from "./page/LoginPage/LoginPage";
import RegisterPage from "./page/RegisterPage/RegisterPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ChatPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </Router>
  );
}

export default App;
