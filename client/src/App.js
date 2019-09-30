import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Eat from "./pages/eat";
import Sleep from "./pages/sleep";
import Change from "./pages/change";
import DailyLog from "./pages/dailyLog";
import Footer from "./components/footer";
import Header from "./components/header";
import Index from "./components/index";
import Menu from "./components/menu";
import Start from "./components/start";
import Register from "./pages/register";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/start" component={Start} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/eat" component={Eat} />
          <Route exact path="/sleep" component={Sleep} />
          <Route exact path="/change" component={Change} />
          <Route exact path="/dailyLog" component={DailyLog} />
          <Route exact path="/register" component={Register} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;